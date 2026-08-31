import "./layouts/sixima.css";

function JAIBUS() {
  return (
    <main className="terminal">
      {/* Header */}
      <header className="terminal-header">
        <div>JAIST / TRANSPORTATION SYSTEM</div>
        <div>BUILD: 2026.08</div>
      </header>

      <hr />

      {/* Title */}
      <section className="title">
        <p className="label">[ SYSTEM IDENTIFICATION ]</p>

        <h1>
          JAIST
          <br />
          SHUTTLE BUS RESERVATION SYSTEM
        </h1>

        <p className="sub">JAIST KOMATSU LINE / UNOFFICIAL CLIENT</p>
      </section>

      <hr />

      {/* Status */}
      <section className="section">
        <p className="label">01 / SYSTEM STATUS</p>

        <h2>SYSTEM INFORMATION</h2>

        <div className="data-table">
          <div>
            <span>SYSTEM</span>
            <span>JAIBUS-APP</span>
          </div>

          <div>
            <span>TARGET</span>
            <span>JAIST KOMATSU LINE</span>
          </div>

          <div>
            <span>PLATFORM</span>
            <span>ANDROID</span>
          </div>

          <div>
            <span>STATUS</span>
            <span>OPERATIONAL</span>
          </div>

          <div>
            <span>LICENSE</span>
            <span>OPEN SOURCE</span>
          </div>
        </div>
      </section>

      <hr />

      {/* About */}
      <section className="section">
        <p className="label">02 / ABOUT</p>

        <h2>WHAT IS JAIBUS?</h2>

        <p>
          JAIBUS-app is an unofficial Android client designed for the JAIST
          Komatsu Line shuttle bus reservation system.
        </p>

        <p>
          The application provides a faster and simpler reservation experience
          while maintaining compatibility with the existing official system.
        </p>
      </section>

      <hr />

      {/* Features */}
      <section className="section">
        <p className="label">03 / FEATURES</p>

        <h2>CORE FUNCTIONS</h2>

        <div className="research-list">
          <div>
            <strong>[01]</strong>
            &nbsp; FAST RESERVATION
          </div>

          <div>
            <strong>[02]</strong>
            &nbsp; BIOMETRIC AUTHENTICATION
          </div>

          <div>
            <strong>[03]</strong>
            &nbsp; REDUCED NUMBER OF OPERATIONS
          </div>

          <div>
            <strong>[04]</strong>
            &nbsp; OFFICIAL SYSTEM COMPATIBILITY
          </div>

          <div>
            <strong>[05]</strong>
            &nbsp; SECURE LOCAL AUTHENTICATION
          </div>
        </div>
      </section>

      <hr />

      {/* Concept */}
      <section className="section">
        <p className="label">04 / DESIGN PRINCIPLE</p>

        <h2>LESS OPERATION. MORE TRANSPORT.</h2>

        <p>
          The official reservation process requires multiple interactions before
          a reservation can be completed.
        </p>

        <p>
          JAIBUS reduces unnecessary interaction and places the essential
          operations directly in front of the user.
        </p>

        <div className="quote">
          RESERVE YOUR SEAT
          <br />
          WITHOUT UNNECESSARY STEPS.
        </div>
      </section>

      <hr />

      {/* Security */}
      <section className="section">
        <p className="label">05 / SECURITY</p>

        <h2>AUTHENTICATION</h2>

        <div className="data-table">
          <div>
            <span>LOGIN</span>
            <span>BIOMETRIC AUTHENTICATION</span>
          </div>

          <div>
            <span>CREDENTIALS</span>
            <span>LOCAL DEVICE STORAGE</span>
          </div>

          <div>
            <span>NETWORK</span>
            <span>OFFICIAL SYSTEM</span>
          </div>

          <div>
            <span>APPLICATION</span>
            <span>UNOFFICIAL / INDEPENDENT</span>
          </div>
        </div>
      </section>

      <hr />

      {/* Disclaimer */}
      <section className="section">
        <p className="label">06 / NOTICE</p>

        <h2>IMPORTANT</h2>

        <p>
          JAIBUS-app is an unofficial application and is not operated,
          maintained, or endorsed by JAIST.
        </p>

        <p>
          The application is provided as an independent client for users of the
          JAIST Komatsu Line shuttle bus.
        </p>
      </section>

      <hr />

      {/* Developer */}
      <section className="section">
        <p className="label">07 / DEVELOPMENT</p>

        <h2>PROJECT INFORMATION</h2>

        <div className="data-table">
          <div>
            <span>DEVELOPER</span>
            <span>sixima</span>
          </div>

          <div>
            <span>PROJECT</span>
            <span>JAIBUS-app</span>
          </div>

          <div>
            <span>PLATFORM</span>
            <span>ANDROID</span>
          </div>

          <div>
            <span>SOURCE</span>
            <span>github.com/ynk-samez/JAIBUS-app</span>
          </div>
        </div>
      </section>

      <hr />

      {/* Footer */}
      <footer className="terminal-footer">
        <div>JAIBUS INFORMATION SYSTEM</div>
        <div>SYSTEM STATUS: ONLINE</div>
        <div>END OF DOCUMENT_</div>
      </footer>
    </main>
  );
}

export default JAIBUS;
