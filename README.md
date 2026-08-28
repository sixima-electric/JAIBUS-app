# Bus reservation system for JAIST (Japan Advanced Institute of Science and Technology) Komatsu line. (Android)

An unofficial Android application to easily reserve seats for the JAIST shuttle bus (Komatsu line). Built with Flutter, this app streamlines the booking process with biometric authentication and an intuitive UI.

## Features
* **Biometric Auto-Login:** Securely save your credentials using Android Keystore and log in instantly using your fingerprint or face recognition.
* **Seamless Booking:** Select dates, directions (JAIST ➔ Komatsu Station / Komatsu Station ➔ JAIST), and trips from the timetable.
* **Smart Session Management:** Automatically handles JAIST server redirects and session cookies in the background.

## Prerequisites
* Android Device 
* JAIST student/staff account (Username and Password)

## Installation
1. Download the `app-release.apk` file.
2. Open the downloaded file on your Android device.
3. If prompted, allow "Install from unknown sources" (提供元不明のアプリのインストールを許可) in your device settings.
4. Install the application.

## Usage
1. **First Login:** Enter your JAIST username (e.g., s123456) and password manually.
2. **Booking:** Select the date, direction, and trip, then press "Book Now".
3. **Next Time:** Upon opening the app, it will prompt for biometric authentication and log you in automatically.

## Tech Stack
* **Framework:** Flutter (Dart)
* **Key Packages:**
  * `dio`, `dio_cookie_manager`, `cookie_jar` (Networking & Session Management)
  * `local_auth` (Biometrics)
  * `flutter_secure_storage` (Encrypted credential storage)

## Disclaimer
This is an unofficial application and is not affiliated with, maintained, authorized, endorsed, or sponsored by the Japan Advanced Institute of Science and Technology (JAIST). Use at your own risk.

---

# JAIST 小松線シャトルバス予約システム (Android版)

JAIST（北陸先端科学技術大学院大学）の小松線シャトルバスの座席を簡単に予約できる非公式のAndroidアプリです。Flutterで開発されており、生体認証による自動ログイン機能と直感的なUIを備えています。

## 主な機能
* **生体認証による自動ログイン:** Androidのセキュアストレージに暗号化して保存された認証情報を使い、指紋や顔認証で一瞬でログインできます。
* **スムーズな予約:** 日付、方向（JAIST発 / 小松駅発）、乗車便をタップするだけで直感的に選択・予約が可能です。
* **自動セッション管理:** JAISTのサーバー特有のリダイレクトやCookieの保持をバックグラウンドで自動処理します。

## 必要なもの
* Androidスマートフォン
* JAISTの学生/教職員アカウント（ユーザー名とパスワード）

## インストール方法
1. 配布された `app-release.apk` をダウンロードします。
2. Android端末でファイルを開きます。
3. 警告が出た場合は、設定から「提供元不明のアプリのインストール」を許可してください。
4. インストールを完了させます。

## 使い方
1. **初回起動時:** JAISTのユーザー名（s123456など）とパスワードを手動で入力してログインします。
2. **予約する:** 日付、方向、便を選択して「Book Now」を押します。
3. **2回目以降:** アプリを開いた瞬間に指紋認証（または顔認証/パターン）が求められ、成功するとパスワード入力なしで自動ログインされます。

## 免責事項
本アプリは非公式のツールであり、北陸先端科学技術大学院大学（JAIST）とは一切関係ありません。公式のサポートや保証はありませんので、ご自身の責任においてご利用ください。
