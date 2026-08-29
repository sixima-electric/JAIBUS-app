import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-brand">
          <svg
            className="app-logo"
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
          <span className="title-highlight">JAIBUS-app</span>
        </div>
        <h1>Alternative Reservation App for JAIST Shuttle Komatsu Line</h1>
        <p className="hero-subtitle">
          A lightning-fast, modern, and secure reservation interface designed
          exclusively for JAIST students and staff.
        </p>
      </header>

      <main className="app-main">
        {/* 新規追加：信頼性とメリットをアピールするグリッドセクション */}
        <section className="app-section">
          <div className="features-grid">
            <div className="feature-card">
              <svg
                className="feature-icon"
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
              <h3>Privacy & Security First</h3>
              <p>
                Your login credentials are never stored on any external servers.
                All authentication happens securely between your device and the
                official JAIST system.
              </p>
            </div>

            <div className="feature-card">
              <svg
                className="feature-icon"
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
              <h3>Lightning Fast Experience</h3>
              <p>
                We eliminated unnecessary page transitions and UI rendering,
                drastically cutting down the time it takes to secure your seat
                on the bus.
              </p>
            </div>

            <div className="feature-card">
              <svg
                className="feature-icon"
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
              <h3>Transparent & Open Source</h3>
              <p>
                Built by the community, for the community. The entire codebase
                is open-source, allowing anyone to audit the code to ensure it
                is completely safe to use.
              </p>
            </div>
          </div>
        </section>

        <section className="app-section">
          <h2>What is JAIBUS-app?</h2>
          <p>
            JAIBUS-app is an independent, community-driven project designed to
            improve the daily lives of JAIST members. It serves as an
            alternative, highly optimized interface to the official JAIST
            Shuttle Komatsu Line reservation system.
          </p>
          <p>
            By rethinking the user experience from the ground up, JAIBUS-app
            transforms a multi-step chore into a seamless, one-click
            experience—all while maintaining{" "}
            <span className="highlight-text">100% compatibility</span> with the
            official backend.
          </p>
        </section>

        <section className="app-section">
          <h2>How does it actually work?</h2>
          <p>
            It is important to note that JAIBUS-app{" "}
            <strong>does not replace</strong> the official reservation system,
            nor does it maintain its own database of reservations. Instead, it
            acts as a smart intermediary layer running locally on your device.
          </p>
          <p>
            When you use JAIBUS-app, it programmatically interacts with the
            official system on your behalf. The reason it is much faster is
            simple: it bypasses the heavy, redundant web pages and visual
            transitions that are legally or structurally required by the
            official portal, executing the exact same network requests in the
            background efficiently.
          </p>
        </section>

        <section className="app-section">
          <h2>Tech Stack & Architecture</h2>
          <p>
            Built with modern web technologies to ensure speed, reliability, and
            security across all devices.
          </p>
          <div className="tech-stack-list">
            <span className="tech-badge">React</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">Vite</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">Client-side Rendering</span>
            <span className="tech-badge highlight-badge">Open Source</span>
          </div>
        </section>

        <section className="app-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-list">
            <details className="faq-details">
              <summary className="faq-summary">
                Is it safe to use my JAIST credentials here?
              </summary>
              <div className="faq-content">
                <p>
                  <strong>Yes, absolutely.</strong> JAIBUS-app does not have a
                  backend database. Your credentials are used locally on your
                  device to communicate directly with the official JAIST system.
                  We cannot see, store, or track your passwords.
                </p>
              </div>
            </details>

            <details className="faq-details">
              <summary className="faq-summary">
                Will you release an iOS or Android app?
              </summary>
              <div className="faq-content">
                <p>
                  Currently, JAIBUS-app is fully optimized as a mobile-friendly
                  web application (PWA). A dedicated native iOS/Android version
                  is being considered for the future based on community demand.
                </p>
              </div>
            </details>

            <details className="faq-details">
              <summary className="faq-summary">
                Is this an official JAIST application?
              </summary>
              <div className="faq-content">
                <p>
                  No. This is an unofficial, community-led open-source project.
                  It is not affiliated with, maintained, or endorsed by the
                  Japan Advanced Institute of Science and Technology (JAIST).
                </p>
              </div>
            </details>

            <details className="faq-details">
              <summary className="faq-summary">
                How can I support or contribute to this project?
              </summary>
              <div className="faq-content">
                <p>
                  As an open-source initiative, we welcome all forms of
                  contribution! You can check out our source code, report bugs,
                  suggest features, or submit pull requests on our GitHub
                  repository.
                </p>
              </div>
            </details>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p className="footer-disclaimer">
          Not affiliated with JAIST. An independent open-source project.
        </p>
        <p>&copy; {new Date().getFullYear()} JAIBUS-app Contributors.</p>
      </footer>
    </div>
  );
}

export default App;
