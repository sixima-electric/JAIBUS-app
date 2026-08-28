import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

class SessionClient {
  static final SessionClient _instance = SessionClient._internal();
  factory SessionClient() => _instance;
  SessionClient._internal();

  final Map<String, String> _cookies = {};

  String get cookieHeader =>
      _cookies.entries.map((e) => '${e.key}=${e.value}').join('; ');

  void _updateCookies(http.Response response) {
    final rawCookie = response.headers['set-cookie'];
    if (rawCookie != null) {
      final matches = RegExp(r'PHPSESSID=([^;, ]+)').allMatches(rawCookie);
      if (matches.isNotEmpty) {
        _cookies['PHPSESSID'] = matches.last.group(1)!;
      }
    }
  }

  Future<http.Response> post(Uri url, {required Map<String, String> body}) async {
    Uri currentUrl = url;
    http.Response? response;
    int redirectCount = 0;
    String method = 'POST';

    while (redirectCount < 5) {
      final client = http.Client();
      try {
        final request = http.Request(method, currentUrl)
          ..followRedirects = false; // 自動リダイレクトを切り、手動でCookieを運ぶ

        if (_cookies.isNotEmpty) {
          request.headers['Cookie'] = cookieHeader;
        }

        // スマホ判定を回避するため、User-Agentを一般的なブラウザに偽装
        request.headers['User-Agent'] =
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';

        if (method == 'POST') {
          // 【重要】Dartの勝手なエンコードを回避し、Pythonと同じ純粋なURLエンコードにする
          final encodedBody = body.entries
              .map((e) =>
                  '${Uri.encodeQueryComponent(e.key)}=${Uri.encodeQueryComponent(e.value)}')
              .join('&');

          request.bodyBytes = utf8.encode(encodedBody);
          request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }

        final streamed = await client.send(request);
        response = await http.Response.fromStream(streamed);

        _updateCookies(response);

        // 302 Found (予約成功時のリダイレクト) を検知して追従
        if (response.statusCode >= 301 && response.statusCode <= 303) {
          final location = response.headers['location'];
          if (location != null) {
            currentUrl = currentUrl.resolve(location);
            method = 'GET';
            redirectCount++;
            continue;
          }
        }
        break;
      } finally {
        client.close();
      }
    }

    if (response == null) {
      throw Exception('Network request failed.');
    }
    return response;
  }

  void clear() {
    _cookies.clear();
  }
}