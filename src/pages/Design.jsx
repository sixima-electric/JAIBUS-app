import "./layouts/sixima.css";

function Design() {
  return (
    <main className="terminal">
      {/* HEADER */}
      <header className="terminal-header">
        <div>SIXIMA SYSTEM DESIGN POLICY // REVISION 2.5</div>
        <div>BUILD: 2026.08 // STABLE</div>
      </header>

      {/* SYSTEM IDENTIFICATION / TITLE */}
      <section className="title">
        <p className="label">[ SYSTEM IDENTIFICATION ]</p>
        <h1>SIXIMA DESIGN POLICY</h1>
        <p className="label">SYSTEM TOKENS, CLASS REGISTRY & NOTATION RULES</p>
      </section>

      {/* 01 / CORE PHILOSOPHY */}
      <section className="section">
        <p className="label">01 / ARCHITECTURE</p>
        <h2>CORE PHILOSOPHY</h2>
        <p>
          Sixima UI embodies a high-density, low-latency terminal environment.
          Information hierarchy relies on{" "}
          <strong>strict spatial containment</strong>, monospaced typography,
          and precise luminance contrast rather than heavy drop-shadows or
          radii.
        </p>
        <p>
          Every component prioritizes <mark>instant scanability</mark> and
          zero-ambiguity telemetry.
        </p>

        <div className="data-table">
          <div>
            <span>COLOR PALETTE</span>
            <span>
              Obsidian base (<code>#0b0f0c</code>), phosphor text (
              <code>#d7e3d7</code>), muted olive borders
            </span>
          </div>
          <div>
            <span>TYPOGRAPHY</span>
            <span>
              Monospace primary (<code>Courier New</code>,{" "}
              <code>Lucida Console</code>)
            </span>
          </div>
          <div>
            <span>BOUNDARIES</span>
            <span>
              1px solid / dashed divider borders (
              <code>var(--border-color)</code>)
            </span>
          </div>
          <div>
            <span>CORNER RADIUS</span>
            <span>Strict 0px across all inputs, buttons, and panels</span>
          </div>
        </div>
      </section>

      {/* 02 / HIGHLIGHT & NOTATION */}
      <section className="section">
        <p className="label">02 / NOTATION & HIGHLIGHTS</p>
        <h2>TEXT EMPHASIS PATTERNS</h2>
        <p>
          Do not alter font-weight heavily on monospace text. Instead, rely on
          luminance shifts, subtle bounding boxes, and inverted blocks.
        </p>

        <div className="research-list">
          <div>
            <strong>[01] INLINE CODE</strong> &nbsp; Use{" "}
            <code>&lt;code&gt;</code> for parameters, CSS classes, and variables
            (e.g., <code>--text-bright</code>).
          </div>
          <div>
            <strong>[02] HIGH LUMINANCE</strong> &nbsp; Use{" "}
            <code>&lt;strong&gt;</code> for phrases requiring{" "}
            <strong>pure bright emphasis</strong> without font distortion.
          </div>
          <div>
            <strong>[03] INVERSE BLOCK</strong> &nbsp; Use{" "}
            <code>&lt;mark&gt;</code> or{" "}
            <span className="hl-block">.hl-block</span> for{" "}
            <mark>terminal cursor/selection states</mark>.
          </div>
          <div>
            <strong>[04] DASHED TERM</strong> &nbsp; Use{" "}
            <span className="hl-dash">.hl-dash</span> for{" "}
            <span className="hl-dash">glossary references</span> or technical
            annotations.
          </div>
        </div>
      </section>

      {/* 03 / CLASS REGISTRY */}
      <section className="section">
        <p className="label">03 / CLASS REGISTRY</p>
        <h2>CSS CLASS SPECIFICATION</h2>
        <p>
          All layout blocks and interface primitives map directly to the classes
          defined in <code>base.css</code>.
        </p>

        <div className="data-table">
          <div>
            <span>.terminal</span>
            <span>
              Root layout shell with maximum width constraint and responsive
              inline padding
            </span>
          </div>
          <div>
            <span>.terminal-header</span>
            <span>
              Top-level telemetry strip displaying version and build metadata
            </span>
          </div>
          <div>
            <span>.title</span>
            <span>
              Primary hero identification container for page headers and
              subtitles
            </span>
          </div>
          <div>
            <span>.section</span>
            <span>
              Standard content partition delimited by vertical padding and
              spacing
            </span>
          </div>
          <div>
            <span>.label</span>
            <span>
              Monospaced metadata descriptor prefixing major section headers
            </span>
          </div>
          <div>
            <span>.data-table</span>
            <span>
              Two-column key-value grid for technical parameters and
              specifications
            </span>
          </div>
          <div>
            <span>.research-list</span>
            <span>Enumerated checklist with interactive hover row states</span>
          </div>
          <div>
            <span>.quote</span>
            <span>Callout container with a 2px left border in accent tint</span>
          </div>
          <div>
            <span>.hero-actions</span>
            <span>
              Flex container spacing trigger buttons and repository links
            </span>
          </div>
          <div>
            <span>.button</span>
            <span>
              Monospace action button supporting icons, hover inversions, and
              links
            </span>
          </div>
          <div>
            <span>.nav-list</span>
            <span>Structured index list container for page navigation</span>
          </div>
          <div>
            <span>.nav-item</span>
            <span>
              Three-column grid row (number, description, arrow indicator)
            </span>
          </div>
        </div>
      </section>

      {/* 04 / COMPONENT EXAMPLES */}
      <section className="section">
        <p className="label">04 / EXAMPLES</p>
        <h2>CALLOUTS & NAVIGATION BLOCKS</h2>

        <div className="quote">
          NOTE: Direct modification of structural variables should remain
          centralized in <code>:root</code> to preserve theme integrity across
          responsive breakpoints.
        </div>

        <div className="nav-list">
          <a className="nav-item" href="#architecture">
            <span className="nav-number">01</span>
            <div className="nav-content">
              <strong>ARCHITECTURE & TOKENS</strong>
              <small>
                Foundational layout variables and palette definitions
              </small>
            </div>
            <span className="nav-arrow">→</span>
          </a>

          <a className="nav-item" href="#classes">
            <span className="nav-number">02</span>
            <div className="nav-content">
              <strong>CLASS REGISTRY</strong>
              <small>
                Specification matrix for all active layout primitives
              </small>
            </div>
            <span className="nav-arrow">→</span>
          </a>
        </div>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="https://github.com/ynk-samez/JAIBUS-app"
            target="_blank"
            rel="noreferrer"
          >
            <span className="github-mark">◉</span>
            <span>VIEW SOURCE SPECIFICATION</span>
            <span className="external">↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="terminal-footer">
        <div>DOC: SIXIMA_POLICY_V2.5</div>
        <div>SYSTEM STATUS: ONLINE</div>
        <div>END OF DOCUMENT_</div>
      </footer>
    </main>
  );
}

export default Design;
