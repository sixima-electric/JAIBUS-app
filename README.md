<div align="center">
  <img src="https://img.icons8.com/color/96/000000/bus.png" alt="App Icon" width="80">

  # JAIST Shuttle Bus Booking App

  **An unofficial, fast, and secure Android application for JAIST Komatsu line.**

  [![Android](https://img.shields.io/badge/Platform-Android-3DDC84?style=flat-square&logo=android&logoColor=white)](#)
  [![Flutter](https://img.shields.io/badge/Framework-Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)](#)
  [![Dart](https://img.shields.io/badge/Language-Dart-0175C2?style=flat-square&logo=dart&logoColor=white)](#)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](#)

  [English](#-english) • [日本語](#-日本語) • [中文](#-中文) • [Bahasa Indonesia](#-bahasa-indonesia) • [ภาษาไทย](#-ภาษาไทย)
</div>

---

## 📱 Screenshots
<img width="281" height="500" alt="emulator login" src="https://github.com/user-attachments/assets/b6591d32-22cb-499d-965e-e3adacfa5f21">
<img width="281" height="500" alt="emulator select" src="https://github.com/user-attachments/assets/1d2e21b8-ba1e-4ec2-9630-a814998fd04b" />

---

## 🇬🇧 English

### ✨ Features
* 🔒 **Biometric Auto-Login:** Securely save your credentials using Android Keystore and log in instantly via Fingerprint or Face recognition.
* ⚡️ **Seamless Booking:** Minimal taps to select dates, directions, and trips from the timetable.
* 🤖 **Smart Session Management:** Automatically handles JAIST server redirects and session cookies in the background.

### 🛠 Tech Stack
* **UI & Core:** Flutter / Dart
* **Networking:** `dio`, `dio_cookie_manager`, `cookie_jar`
* **Security:** `local_auth`, `flutter_secure_storage`

### 🚀 Installation
1. Download the latest [`app-release.apk`](#) from the Releases page.
2. Open the file on your Android device.
3. Allow **"Install from unknown sources"** if prompted in your device settings.
4. Install and enjoy!

---

## 🇯🇵 日本語

### ✨ 主な機能
* 🔒 **生体認証ログイン:** Androidのセキュアストレージ（Keystore）を利用し、指紋や顔認証で安全かつ一瞬でログイン。
* ⚡️ **直感的な予約フロー:** 日付、方向（JAIST発 / 小松駅発）、乗車便をタップするだけでスムーズに予約可能。
* 🤖 **自動セッション管理:** JAISTサーバー特有のリダイレクト処理やCookie保持をバックグラウンドで完全に自動化。

### 🛠 採用技術
* **UI・コア:** Flutter / Dart
* **通信・セッション:** `dio`, `dio_cookie_manager`, `cookie_jar`
* **セキュリティ:** `local_auth`, `flutter_secure_storage`

### 🚀 インストール方法
1. 最新の [`app-release.apk`](#) をスマホにダウンロードします。
2. Android端末でファイルを開きます。
3. 警告が出た場合は、設定から **「提供元不明のアプリのインストール」** を許可してください。
4. インストールして起動します！

---

## 🇨🇳 中文

### ✨ 主要功能
* 🔒 **生物识别自动登录:** 使用 Android Keystore 安全保存您的凭据，并通过指纹或面部识别瞬间登录。
* ⚡️ **无缝预约:** 只需极少点击即可完成日期、方向（前往 JAIST / 前往小松站）以及车次的选择。
* 🤖 **智能会话管理:** 在后台自动处理 JAIST 服务器的重定向和会话 Cookie。

### 🛠 技术栈
* **UI 与核心:** Flutter / Dart
* **网络:** `dio`, `dio_cookie_manager`, `cookie_jar`
* **安全:** `local_auth`, `flutter_secure_storage`

### 🚀 安装方法
1. 从 Releases 页面下载最新的 [`app-release.apk`](#)。
2. 在您的 Android 设备上打开该文件。
3. 如果设备提示，请在设置中允许 **“安装未知来源的应用” (Install from unknown sources)**。
4. 安装并使用！

---

## 🇮🇩 Bahasa Indonesia

### ✨ Fitur Utama
* 🔒 **Login Otomatis Biometrik:** Simpan kredensial Anda dengan aman menggunakan Android Keystore dan login seketika melalui sidik jari atau pengenalan wajah.
* ⚡️ **Pemesanan Mudah:** Hanya dengan beberapa ketukan untuk memilih tanggal, arah, dan jadwal perjalanan dari tabel waktu.
* 🤖 **Manajemen Sesi Cerdas:** Menangani pengalihan (redirects) server JAIST dan cookie sesi secara otomatis di latar belakang.

### 🛠 Teknologi
* **UI & Inti:** Flutter / Dart
* **Jaringan:** `dio`, `dio_cookie_manager`, `cookie_jar`
* **Keamanan:** `local_auth`, `flutter_secure_storage`

### 🚀 Cara Instalasi
1. Unduh [`app-release.apk`](#) terbaru dari halaman Releases.
2. Buka file tersebut di perangkat Android Anda.
3. Izinkan **"Instal dari sumber tidak dikenal" (Install from unknown sources)** jika diminta dalam pengaturan perangkat.
4. Instal dan gunakan!

---

## 🇹🇭 ภาษาไทย

### ✨ คุณสมบัติหลัก
* 🔒 **เข้าสู่ระบบอัตโนมัติด้วยไบโอเมตริกซ์:** บันทึกข้อมูลการเข้าสู่ระบบของคุณอย่างปลอดภัยด้วย Android Keystore และเข้าสู่ระบบทันทีผ่านการสแกนลายนิ้วมือหรือใบหน้า
* ⚡️ **การจองที่ราบรื่น:** แตะเพียงไม่กี่ครั้งเพื่อเลือกวันที่ เส้นทาง และรอบรถจากตารางเวลา
* 🤖 **การจัดการเซสชันอัจฉริยะ:** จัดการการเปลี่ยนเส้นทาง (redirects) ของเซิร์ฟเวอร์ JAIST และคุกกี้เซสชันโดยอัตโนมัติในเบื้องหลัง

### 🛠 เทคโนโลยีที่ใช้
* **UI และคอร์หลัก:** Flutter / Dart
* **เครือข่าย:** `dio`, `dio_cookie_manager`, `cookie_jar`
* **ความปลอดภัย:** `local_auth`, `flutter_secure_storage`

### 🚀 วิธีการติดตั้ง
1. ดาวน์โหลดไฟล์ [`app-release.apk`](#) ล่าสุดจากหน้า Releases
2. เปิดไฟล์บนอุปกรณ์ Android ของคุณ
3. อนุญาต **"Install from unknown sources" (ติดตั้งแอปพลิเคชันที่ไม่รู้จัก)** หากมีการแจ้งเตือนในการตั้งค่าอุปกรณ์ของคุณ
4. ติดตั้งและใช้งานได้เลย!

---

## ⚠️ Disclaimer (免責事項 / 免责声明 / Peringatan / ข้อสงวนสิทธิ์)

> This is an **unofficial** application and is not affiliated with, maintained, authorized, endorsed, or sponsored by the Japan Advanced Institute of Science and Technology (JAIST). Use at your own risk.
>
> 本アプリは**非公式**のツールであり、北陸先端科学技術大学院大学（JAIST）とは一切関係ありません。公式のサポートや保証はありませんので、ご自身の責任においてご利用ください。
>
> 本应用为**非官方**工具，与日本北陆先端科学技术大学院大学 (JAIST) 无任何附属、维护、授权、认可或赞助关系。请自行承担使用风险。
>
> Aplikasi ini bersifat **tidak resmi** dan tidak berafiliasi, dikelola, disahkan, didukung, atau disponsori oleh Japan Advanced Institute of Science and Technology (JAIST). Gunakan dengan risiko Anda sendiri.
>
> แอปพลิเคชันนี้เป็นแอปพลิเคชัน**ไม่เป็นทางการ** และไม่มีความเกี่ยวข้อง หรือไม่ได้รับการสนับสนุนจาก Japan Advanced Institute of Science and Technology (JAIST) ผู้ใช้ต้องยอมรับความเสี่ยงในการใช้งานเอง
