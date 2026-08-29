import { useState, useEffect } from "react";
import "./App.css";

const i18n = {
  en: {
    title: "Alternative Reservation App for JAIST Shuttle Komatsu Line",
    subtitle:
      "A lightning-fast, modern, and secure Android application designed exclusively for JAIST students and staff.",
    download_apk: "Download for Android (.apk)",
    download_apk_aria: "Download the Android APK file",
    github_app: "App Source (GitHub)",
    github_api: "API Source (GitHub)",
    f1_title: "Privacy & Security First",
    f1_desc:
      "Your login credentials are never stored on any external servers. All authentication happens securely between your device and the official JAIST system.",
    f2_title: "Lightning Fast Experience",
    f2_desc:
      "We eliminated unnecessary page transitions and UI rendering, drastically cutting down the time it takes to secure your seat on the bus.",
    f3_title: "Transparent & Open Source",
    f3_desc:
      "Built by the community, for the community. Both the app and API codebases are published on GitHub under the MIT License.",
    q1_title: "What is JAIBUS-app?",
    q1_p1:
      "JAIBUS-app is an independent, community-driven project designed to improve the daily lives of JAIST members. It serves as an alternative, highly optimized interface to the official JAIST Shuttle Komatsu Line reservation system.",
    q1_p2:
      "By rethinking the user experience from the ground up, JAIBUS-app transforms a multi-step chore into a seamless experience—all while maintaining 100% compatibility with the official backend.",
    q2_title: "How does it actually work?",
    q2_p1:
      "JAIBUS-app does not replace the official reservation system, nor does it maintain its own database. Instead, it acts as a smart intermediary layer running locally on your Android device.",
    q2_p2:
      "When you use the app, it programmatically interacts with the official system on your behalf. It bypasses the heavy, redundant web pages required by the official portal, executing the exact same network requests in the background efficiently.",
    tech_title: "Tech Stack & Open Source",
    tech_desc:
      "JAIBUS is composed of two main projects: the native Android client built with Flutter/Dart, and a backend API built with Python to handle complex scraping and request logic securely.",
    faq_title: "Frequently Asked Questions",
    faq1_q: "Is it safe to use my JAIST credentials here?",
    faq1_a:
      "Yes, absolutely. JAIBUS-app does not have a persistent database. Your credentials are used locally on your device to communicate directly with the official JAIST system. We cannot see, store, or track your passwords.",
    faq2_q: "Is there an iOS (iPhone) version?",
    faq2_a:
      "Currently, JAIBUS-app is available exclusively for Android devices. An iOS version may be considered in the future based on community demand and open-source contributions.",
    faq3_q: "Is this an official JAIST application?",
    faq3_a:
      "No. This is an unofficial, community-led open-source project. It is not affiliated with, maintained, or endorsed by the Japan Advanced Institute of Science and Technology (JAIST).",
    faq4_q: "How can I support or contribute?",
    faq4_a:
      "We welcome all forms of contribution! You can check out our source code for both the App and the API on GitHub, report bugs, suggest features, or submit pull requests.",
    footer_disc:
      "Not affiliated with JAIST. An independent open-source project.",
  },
  ja: {
    title: "JAIST 小松線シャトルバス 代替予約アプリ",
    subtitle:
      "JAISTの学生と教職員のために設計された、高速でモダン、かつセキュアなAndroidアプリ。",
    download_apk: "Android版をダウンロード (.apk)",
    download_apk_aria: "AndroidのAPKファイルをダウンロードする",
    github_app: "アプリ版ソース (GitHub)",
    github_api: "API版ソース (GitHub)",
    f1_title: "プライバシーとセキュリティを最優先",
    f1_desc:
      "ログイン情報は外部サーバーに一切保存されません。すべての認証は、お使いの端末とJAISTの公式システム間で安全に行われます。",
    f2_title: "超高速な操作体験",
    f2_desc:
      "不要な画面遷移やUIの再描画を排除し、バスの座席を確保するまでの時間を大幅に短縮しました。",
    f3_title: "透明性とオープンソース",
    f3_desc:
      "コミュニティによる、コミュニティのためのアプリ。アプリとAPIの両方のコードベースがGitHubにてMITライセンスで公開されています。",
    q1_title: "JAIBUS-appとは？",
    q1_p1:
      "JAIBUS-appは、JAISTメンバーの日常生活を向上させるために開発された、コミュニティ主導の独立プロジェクトです。公式の小松線シャトルバス予約システムに対する、高度に最適化された代替インターフェースとして機能します。",
    q1_p2:
      "ユーザー体験を根本から見直すことで、面倒な複数ステップの作業をシームレスな体験へと変革しました。もちろん、公式のバックエンドとは完全に互換性を保っています。",
    q2_title: "どのような仕組みですか？",
    q2_p1:
      "JAIBUS-appは公式のシステムを置き換えるものではなく、独自のデータベースも持っていません。その代わり、Android端末上でローカルに動作する「賢い仲介レイヤー」として機能します。",
    q2_p2:
      "アプリを使用すると、ユーザーに代わって公式システムとプログラム的に通信します。公式ポータルで求められる重く冗長なウェブページをバイパスし、全く同じネットワークリクエストをバックグラウンドで効率的に実行します。",
    tech_title: "技術スタックとオープンソース",
    tech_desc:
      "JAIBUSは主に2つのプロジェクトで構成されています。Flutter/Dartで構築されたネイティブAndroidクライアントと、複雑なスクレイピングやリクエスト処理を安全に行うためのPython製バックエンドAPIです。",
    faq_title: "よくあるご質問 (FAQ)",
    faq1_q: "ここでJAISTの認証情報を使用しても安全ですか？",
    faq1_a:
      "はい、絶対に安全です。JAIBUS-appは永続的なデータベースを持ちません。認証情報は端末上でローカルにのみ使用され、公式のJAISTシステムと直接通信します。私たちがあなたのパスワードを閲覧、保存、追跡することは物理的に不可能です。",
    faq2_q: "iOS（iPhone）版はありますか？",
    faq2_a:
      "現在、JAIBUS-appはAndroid端末専用として提供されています。iOS版については、今後のコミュニティからの要望やオープンソースへの貢献に応じて開発を検討します。",
    faq3_q: "これはJAISTの公式アプリですか？",
    faq3_a:
      "いいえ。これはコミュニティ主導による非公式のオープンソースプロジェクトです。北陸先端科学技術大学院大学（JAIST）とは提携しておらず、公式に保守・推奨されているものではありません。",
    faq4_q: "このプロジェクトを支援・貢献するには？",
    faq4_a:
      "あらゆる形の貢献を歓迎します！GitHubにてアプリ版とAPI版のソースコードを確認し、バグ報告や機能提案、プルリクエストなどを送信していただけます。",
    footer_disc:
      "本アプリはJAISTの公式アプリではありません。独立したオープンソースプロジェクトです。",
  },
};

function App() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ja");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ja" : "en"));
  };

  const t = i18n[lang];

  return (
    <div className="app-wrapper" data-theme={theme} lang={lang}>
      <div className="app-container">
        {/* 言語・テーマ切り替えコントロール */}
        <div className="controls-bar">
          <button
            className="control-btn"
            onClick={toggleLang}
            aria-label="Toggle Language"
          >
            {lang === "ja" ? "English" : "日本語"}
          </button>
          <button
            className="control-btn icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </div>

        <header className="app-header">
          <div className="header-brand">
            <svg
              className="app-logo"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 8h16M7 22v-4m10 4v-4M8 14h.01M16 14h.01" />
            </svg>
            <span className="title-highlight">JAIBUS</span>
          </div>
          <h1>{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>

          <div className="hero-actions">
            {/* APK ダウンロード */}
            <a
              href="https://github.com/ynk-samez/JAIBUS-app/releases/download/v1.0.0/app-release.apk"
              className="btn btn-primary"
              aria-label={t.download_apk_aria}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.download_apk}
            </a>

            {/* GitHub - App */}
            <a
              href="https://github.com/ynk-samez/JAIBUS-app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              {t.github_app}
            </a>

            {/* 新規追加: GitHub - API */}
            <a
              href="https://github.com/ynk-samez/JAIBUS-api"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              {t.github_api}
            </a>
          </div>
        </header>

        <main className="app-main">
          {/* 特徴・メリット */}
          <section className="app-section">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <svg
                    className="feature-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>{t.f1_title}</h3>
                <p>{t.f1_desc}</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper color-alt-1">
                  <svg
                    className="feature-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3>{t.f2_title}</h3>
                <p>{t.f2_desc}</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper color-alt-2">
                  <svg
                    className="feature-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3>{t.f3_title}</h3>
                <p>{t.f3_desc}</p>
              </div>
            </div>
          </section>

          {/* 概要 */}
          <section className="app-section">
            <h2>{t.q1_title}</h2>
            <p>{t.q1_p1}</p>
            <p>{t.q1_p2}</p>
          </section>

          {/* 仕組み */}
          <section className="app-section">
            <h2>{t.q2_title}</h2>
            <p>{t.q2_p1}</p>
            <p>{t.q2_p2}</p>
          </section>

          {/* 技術スタック（ご指定のGitHubバッジを使用 + API用バッジ追加） */}
          <section className="app-section">
            <h2>{t.tech_title}</h2>
            <p>{t.tech_desc}</p>

            <div className="tech-badges-group">
              <h3 className="tech-badges-title">App Client (Frontend)</h3>
              <div
                className="tech-badges-container"
                aria-label="Technology Stack Badges for App"
              >
                <a
                  href="https://github.com/ynk-samez/JAIBUS-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Platform-Android-3DDC84?style=flat-square&logo=android&logoColor=white"
                    alt="Platform: Android"
                  />
                </a>
                <a
                  href="https://github.com/ynk-samez/JAIBUS-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Framework-Flutter-02569B?style=flat-square&logo=flutter&logoColor=white"
                    alt="Framework: Flutter"
                  />
                </a>
                <a
                  href="https://github.com/ynk-samez/JAIBUS-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Language-Dart-0175C2?style=flat-square&logo=dart&logoColor=white"
                    alt="Language: Dart"
                  />
                </a>
                <a
                  href="https://github.com/ynk-samez/JAIBUS-app/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"
                    alt="License: MIT"
                  />
                </a>
              </div>
            </div>

            <div className="tech-badges-group">
              <h3 className="tech-badges-title">Backend API</h3>
              <div
                className="tech-badges-container"
                aria-label="Technology Stack Badges for API"
              >
                <a
                  href="https://github.com/ynk-samez/JAIBUS-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Language-Python-3776AB?style=flat-square&logo=python&logoColor=white"
                    alt="Language: Python"
                  />
                </a>
                <a
                  href="https://github.com/ynk-samez/JAIBUS-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Framework-FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white"
                    alt="Framework: FastAPI"
                  />
                </a>
                <a
                  href="https://github.com/ynk-samez/JAIBUS-api/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"
                    alt="License: MIT"
                  />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="app-section">
            <h2>{t.faq_title}</h2>
            <div className="faq-list">
              <details className="faq-details">
                <summary className="faq-summary">
                  <span className="summary-text">{t.faq1_q}</span>
                  <span className="summary-icon" aria-hidden="true"></span>
                </summary>
                <div className="faq-content">
                  <p>{t.faq1_a}</p>
                </div>
              </details>

              <details className="faq-details">
                <summary className="faq-summary">
                  <span className="summary-text">{t.faq2_q}</span>
                  <span className="summary-icon" aria-hidden="true"></span>
                </summary>
                <div className="faq-content">
                  <p>{t.faq2_a}</p>
                </div>
              </details>

              <details className="faq-details">
                <summary className="faq-summary">
                  <span className="summary-text">{t.faq3_q}</span>
                  <span className="summary-icon" aria-hidden="true"></span>
                </summary>
                <div className="faq-content">
                  <p>{t.faq3_a}</p>
                </div>
              </details>

              <details className="faq-details">
                <summary className="faq-summary">
                  <span className="summary-text">{t.faq4_q}</span>
                  <span className="summary-icon" aria-hidden="true"></span>
                </summary>
                <div className="faq-content">
                  <p>{t.faq4_a}</p>
                </div>
              </details>
            </div>
          </section>
        </main>

        <footer className="app-footer">
          <p className="footer-disclaimer">{t.footer_disc}</p>
          <p>&copy; {new Date().getFullYear()} JAIBUS-app Contributors.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
