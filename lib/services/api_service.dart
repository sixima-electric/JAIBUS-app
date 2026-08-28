import 'package:dio/dio.dart';
import 'package:dio_cookie_manager/dio_cookie_manager.dart';
import 'package:cookie_jar/cookie_jar.dart';
import 'package:flutter/foundation.dart';

class ApiService {
  static const String _loginUrl =
      'https://www.jaist.ac.jp/jaist_sds/reserve/index.php';
  static const String _resvUrl =
      'https://www.jaist.ac.jp/jaist_sds/reserve/book.php';

  static final CookieJar _cookieJar = CookieJar();

  static final Dio _dio = Dio(
    BaseOptions(
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      contentType: Headers.formUrlEncodedContentType,
    ),
  )..interceptors.add(CookieManager(_cookieJar)); // CookieManagerを紐付け

  // -----------------------------------------------------------------
  // 【最重要】Cookieを落とさないための手動リダイレクトラッパー
  // -----------------------------------------------------------------
  static Future<Response> _smartRequest(
    String method,
    String url, {
    Map<String, dynamic>? data,
  }) async {
    Uri currentUrl = Uri.parse(url);
    String currentMethod = method;
    int redirectCount = 0;
    Response? response;
    dynamic currentData = data;

    while (redirectCount < 5) {
      response = await _dio.requestUri(
        currentUrl,
        data: currentData,
        options: Options(
          method: currentMethod,
          // Pythonの検証で成功した Referer (遷移元URL) を自動で追加
          headers: {'Referer': currentUrl.toString()},
          followRedirects: false, // ★自動リダイレクトを切り、途中のCookieを確実にキャッチさせる
          validateStatus: (status) =>
              status != null && status < 500, // 302エラーを出さない
        ),
      );

      // 301, 302, 303 のリダイレクト指示が来た場合、Cookieを保持したまま次のURLへ向かう
      if (response.statusCode != null &&
          (response.statusCode == 301 ||
              response.statusCode == 302 ||
              response.statusCode == 303)) {
        final location = response.headers.value('location');
        if (location != null) {
          currentUrl = currentUrl.resolve(location);
          currentMethod = 'GET'; // リダイレクト後は必ずGET
          currentData = null; // データも空にする
          redirectCount++;
          continue;
        }
      }
      break; // リダイレクト以外ならループを抜けてレスポンスを返す
    }
    return response!;
  }

  // -----------------------------------------------------------------
  // 1. ログイン処理
  // -----------------------------------------------------------------
  static Future<bool> login(String username, String password) async {
    try {
      debugPrint('=== Login Process Started (Dio Smart) ===');

      // ★PHPの仕様対策：いきなりPOSTせず、まずはGETして初期Cookieをもらっておく
      await _smartRequest('GET', _loginUrl);

      final data = {
        'act': 'verify',
        'dest': '2',
        'user': username,
        'pass': password,
        'submit': 'ログイン/LOGIN',
      };

      // ログイン実行
      final response = await _smartRequest('POST', _loginUrl, data: data);
      final bodyText = response.data.toString();

      // 成功判定
      return response.statusCode == 200 && !bodyText.contains('エラー');
    } catch (e) {
      debugPrint('!!! Login Error !!!\n$e');
      return false;
    }
  }

  // -----------------------------------------------------------------
  // 2. 予約処理
  // -----------------------------------------------------------------
  static Future<Response> submitReservation({
    required String targetDate,
    required String line,
    required String busId,
    required String direction, // ← 【追加】'a' か 'b' を受け取るように変更
  }) async {
    // Pythonで検証した「完全な正解データ」を構築
    final Map<String, dynamic> resvData = {
      'act': 'add_end',
      'trip': '1',
      'change_res': '',
      'mailetc': '',
      'tgtday': targetDate,
      'line': line,
      'bus_id': busId,
      'geton': direction, // 受け取った方向をセット
      'phone_number': '',
      'phone_flg': '0',
      'passenger_num': '',
    };

    // 【修正】Pythonで判明した通り、22ではなく「23人分」にする
    for (int i = 1; i <= 23; i++) {
      resvData['p_name$i'] = '';
      resvData['p_phone_number$i'] = '';
    }

    // 予約送信
    return await _smartRequest('POST', _resvUrl, data: resvData);
  }

  // -----------------------------------------------------------------
  // 3. ログアウト処理
  // -----------------------------------------------------------------
  static void logout() {
    _cookieJar.deleteAll();
  }
}
