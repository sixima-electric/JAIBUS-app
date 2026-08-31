import { useState, useEffect } from "react";
import { ReactFlow, Handle, Position, MarkerType } from "@xyflow/react";
import "./layouts/sixima.css";
import "./layouts/sixima-flow.css";

// カスタムノードコンポーネント
const TerminalNode = ({ data }) => {
  return (
    <div className={`terminal-node ${data.variant || ""}`}>
      {data.targetHandle && <Handle type="target" position={Position.Left} />}
      <div>{data.label}</div>
      {data.subtitle && (
        <small
          style={{
            display: "block",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            marginTop: "2px",
          }}
        >
          {data.subtitle}
        </small>
      )}
      {data.sourceHandle && <Handle type="source" position={Position.Right} />}
    </div>
  );
};

const nodeTypes = { terminal: TerminalNode };

// --- ダイアグラム 01: 従来型モノリス ---
const legacyNodes = [
  {
    id: "web",
    type: "terminal",
    position: { x: 30, y: 110 },
    data: {
      label: "Monolithic Web GUI",
      subtitle: "[Fixed Graphics & Assets]",
      sourceHandle: true,
      variant: "accent",
    },
  },
  {
    id: "u1",
    type: "terminal",
    position: { x: 380, y: 20 },
    data: { label: "User A: Standard Screen", targetHandle: true },
  },
  {
    id: "u2",
    type: "terminal",
    position: { x: 380, y: 80 },
    data: {
      label: "User B: Low Vision / Dyslexia",
      subtitle: "[Visual Friction]",
      targetHandle: true,
      variant: "dim",
    },
  },
  {
    id: "u3",
    type: "terminal",
    position: { x: 380, y: 150 },
    data: {
      label: "User C: Switch / Motor Input",
      subtitle: "[Input Barrier]",
      targetHandle: true,
      variant: "dim",
    },
  },
  {
    id: "u4",
    type: "terminal",
    position: { x: 380, y: 220 },
    data: {
      label: "User N: Sensory Fatigue",
      subtitle: "[Cognitive Overload]",
      targetHandle: true,
      variant: "dim",
    },
  },
];

const legacyEdges = [
  {
    id: "e1",
    source: "web",
    target: "u1",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e2",
    source: "web",
    target: "u2",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { strokeDasharray: "4,4" },
  },
  {
    id: "e3",
    source: "web",
    target: "u3",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { strokeDasharray: "4,4" },
  },
  {
    id: "e4",
    source: "web",
    target: "u4",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { strokeDasharray: "4,4" },
  },
];

// --- ダイアグラム 02: SIXIMA パラダイム ---
const siximaNodes = [
  {
    id: "base",
    type: "terminal",
    position: { x: 20, y: 110 },
    data: {
      label: "SIXIMA Base Layer",
      subtitle: "[Structured Text / Zero-Noise DOM]",
      sourceHandle: true,
      variant: "accent",
    },
  },
  {
    id: "ai",
    type: "terminal",
    position: { x: 270, y: 110 },
    data: {
      label: "AI Dynamic Adapter",
      subtitle: "[Real-Time Synthesis]",
      targetHandle: true,
      sourceHandle: true,
      variant: "accent",
    },
  },
  {
    id: "u1",
    type: "terminal",
    position: { x: 520, y: 20 },
    data: {
      label: "User A: Visual Graphs",
      subtitle: "[Optimal Projection]",
      targetHandle: true,
    },
  },
  {
    id: "u2",
    type: "terminal",
    position: { x: 520, y: 80 },
    data: {
      label: "User B: Voice / Braille",
      subtitle: "[Non-Visual Stream]",
      targetHandle: true,
    },
  },
  {
    id: "u3",
    type: "terminal",
    position: { x: 520, y: 150 },
    data: {
      label: "User C: Switch / Key Flow",
      subtitle: "[Deterministic Control]",
      targetHandle: true,
    },
  },
  {
    id: "u4",
    type: "terminal",
    position: { x: 520, y: 220 },
    data: {
      label: "User N: Plain Summary",
      subtitle: "[Cognitive Low-Load]",
      targetHandle: true,
    },
  },
];

const siximaEdges = [
  {
    id: "e-base-ai",
    source: "base",
    target: "ai",
    type: "smoothstep",
    className: "accent",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e-ai-u1",
    source: "ai",
    target: "u1",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e-ai-u2",
    source: "ai",
    target: "u2",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e-ai-u3",
    source: "ai",
    target: "u3",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e-ai-u4",
    source: "ai",
    target: "u4",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

function About() {
  const [modalDiagram, setModalDiagram] = useState(null);

  // Escキーでモーダルを閉じる
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalDiagram(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="terminal">
      {/* HEADER TELEMETRY */}
      <header className="terminal-header">
        <div>SIXIMA RESEARCH INITIATIVE // MANIFESTO & PROTOCOL</div>
        <div>ORIGIN: JAIST // STATUS: CONTINUOUS EVOLUTION // REV: 2026.08</div>
      </header>

      {/* SYSTEM IDENTIFICATION */}
      <section className="title">
        <p className="label">[ SYSTEM IDENTIFICATION // ARCHIVE 001 ]</p>
        <h1>ABOUT SIXIMA</h1>
        <p className="label">
          DUAL-PARADIGM INTERFACE ARCHITECTURE: UNIVERSAL HUMAN ACCESSIBILITY ×
          AUTONOMOUS AGENT SYNCHRONIZATION
        </p>
      </section>

      {/* 01 / GENESIS & MISSION */}
      <section className="section">
        <p className="label">01 / GENESIS & DUAL PARADIGM</p>
        <h2>THE DUAL-PARADIGM IMPERATIVE</h2>
        <p>
          Established at the{" "}
          <code>
            Japan Advanced Institute of Science and Technology (JAIST)
          </code>
          ,<strong>SIXIMA</strong> is an open research and interface collective
          born from a fundamental critique of modern graphical computing.
        </p>
        <p>
          Contemporary user interfaces have accumulated excessive visual noise,
          bloated script bundles, and unpredictable layout shifts. This paradigm
          severely compromises accessibility for people navigating sensory,
          motor, and cognitive barriers, while creating impenetrable opacity for
          <strong>autonomous AI agents</strong> and LLMs parsing the web.
        </p>
        <p>
          SIXIMA defines a unified interaction architecture: delivering{" "}
          <mark>radical multi-sensory accessibility for all human beings</mark>{" "}
          alongside
          <mark>
            zero-overhead, token-efficient determinism for machine intelligence
          </mark>
          .
        </p>

        <div className="data-table">
          <div>
            <span>INSTITUTION</span>
            <span>
              Japan Advanced Institute of Science and Technology (JAIST)
            </span>
          </div>
          <div>
            <span>PRIMARY MISSION</span>
            <span>
              Universal accessibility across visual, auditory, tactile, and
              cognitive spectra
            </span>
          </div>
          <div>
            <span>SYNTHETIC INTERFACE</span>
            <span>
              Unambiguous, token-efficient markup optimized for autonomous agent
              execution
            </span>
          </div>
          <div>
            <span>CORE REPOSITORY</span>
            <span>
              <code>sixima/sixima</code> (Open Source System Specification)
            </span>
          </div>
        </div>
      </section>

      {/* 02 / ARCHITECTURAL SHIFT (REACT FLOW) */}
      <section className="section">
        <p className="label">02 / ARCHITECTURAL PARADIGM SHIFT</p>
        <h2>FROM STATIC MONOLITH TO AGENTIC ADAPTATION</h2>
        <p>
          Conventional interface architecture delivers one rigid visual layer
          directly to all endpoints. SIXIMA introduces an intermediate AI
          Adapter layer that ingests deterministic text and synthesizes
          individually tailored interaction modes:
        </p>

        <div className="flow-stack">
          {/* Card 01 */}
          <div
            className="flow-card"
            onClick={() =>
              setModalDiagram({
                title: "ARCHITECTURE 01 // CONVENTIONAL MONOLITH",
                subtitle: "RIGID 1-TO-N DISTRIBUTION MATRIX",
                nodes: legacyNodes,
                edges: legacyEdges,
              })
            }
          >
            <div className="flow-card-header">
              <span>ARCHITECTURE 01 // CONVENTIONAL MONOLITH</span>
              <span>[ CLICK TO EXPAND // ZOOM ↗ ]</span>
            </div>
            <div className="flow-viewport">
              <ReactFlow
                nodes={legacyNodes}
                edges={legacyEdges}
                nodeTypes={nodeTypes}
                fitView
                nodesDraggable={false}
                zoomOnScroll={false}
                panOnDrag={false}
                preventScrolling={false}
              />
            </div>
          </div>

          {/* Card 02 */}
          <div
            className="flow-card"
            onClick={() =>
              setModalDiagram({
                title: "ARCHITECTURE 02 // SIXIMA DUAL PARADIGM",
                subtitle: "REAL-TIME AGENTIC ADAPTATION PIPELINE",
                nodes: siximaNodes,
                edges: siximaEdges,
              })
            }
          >
            <div className="flow-card-header">
              <span>ARCHITECTURE 02 // SIXIMA DUAL PARADIGM</span>
              <span>[ CLICK TO EXPAND // ZOOM ↗ ]</span>
            </div>
            <div className="flow-viewport">
              <ReactFlow
                nodes={siximaNodes}
                edges={siximaEdges}
                nodeTypes={nodeTypes}
                fitView
                nodesDraggable={false}
                zoomOnScroll={false}
                panOnDrag={false}
                preventScrolling={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED INSPECTOR MODAL */}
      {modalDiagram && (
        <div
          className="flow-modal-overlay"
          onClick={() => setModalDiagram(null)}
        >
          <div
            className="flow-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flow-modal-header">
              <div>
                <span style={{ color: "var(--accent-color)" }}>
                  [ INSPECTOR VIEW ]
                </span>{" "}
                &nbsp;
                <strong>{modalDiagram.title}</strong> — {modalDiagram.subtitle}
              </div>
              <button
                className="flow-modal-close"
                onClick={() => setModalDiagram(null)}
              >
                [ESC / CLOSE]
              </button>
            </div>
            <div className="flow-modal-viewport">
              <ReactFlow
                nodes={modalDiagram.nodes}
                edges={modalDiagram.edges}
                nodeTypes={nodeTypes}
                fitView
                nodesDraggable={true}
                zoomOnScroll={true}
                panOnDrag={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* 03 / BEYOND PURE UI */}
      <section className="section">
        <p className="label">03 / EXTENDED SCOPE</p>
        <h2>BEYOND PURE UI: ENGINEERING HOLISTIC UX</h2>
        <p>
          SIXIMA is not merely a visual styling layer. We treat design as an
          end-to-end ergonomic discipline, engineering the{" "}
          <strong>complete user experience (UX)</strong>—from raw network
          latency and input ergonomics to cognitive comprehension speed.
        </p>
        <p>
          This philosophy is actively deployed in production systems like{" "}
          <code>JAIBUS-app</code>, an operational transit and data client
          demonstrating how high-density, text-first ergonomics streamline rapid
          human decision-making while remaining instantly automatable by
          synthetic agents without brittle scraping layers.
        </p>

        <div className="quote">
          "UI is merely the surface boundary. UX is the total velocity of
          understanding, interaction, and execution shared between human and
          machine."
        </div>
      </section>

      {/* 04 / MULTI-SENSORY ACCESSIBILITY */}
      <section className="section">
        <p className="label">04 / ACCESSIBILITY MATRIX</p>
        <h2>UNIVERSAL INCLUSION STANDARDS</h2>
        <p>
          Accessibility is our foundational constraint. SIXIMA is architected to
          eliminate barriers across diverse human conditions:
        </p>

        <div className="research-list">
          <div>
            <strong>[VISUAL INCLUSION]</strong> &nbsp; Phosphor luminance
            contrast prevents ocular fatigue, eliminates low-contrast ambiguity
            for low-vision users, and guarantees flat DOM streams that screen
            readers and refreshable Braille displays traverse with zero error.
          </div>
          <div>
            <strong>[AUDITORY & TACTILE INDEPENDENCE]</strong> &nbsp;
            Information is never trapped behind audio-only queues or delicate
            touch-hover states. Full interface parity is maintained through
            deterministic keyboard navigation, switch-access devices, and screen
            magnifiers.
          </div>
          <div>
            <strong>[COGNITIVE LOAD REDUCTION]</strong> &nbsp; By removing
            layout shifts, aggressive animations, and deceptive popovers, the
            interface maximizes comprehension for neurodivergent users and
            individuals navigating severe informational fatigue.
          </div>
        </div>
      </section>

      {/* 05 / CRITICAL DISCOURSE & Q&A */}
      <section className="section">
        <p className="label">05 / CRITICAL DISCOURSE</p>
        <h2>INQUIRIES & PHILOSOPHICAL DEFENSE</h2>
        <p>
          Addressing fundamental questions regarding the architecture,
          assumptions, and future trajectory of SIXIMA:
        </p>

        <div className="research-list">
          <div>
            <strong>
              [Q1: IS TEXT-BASED UI THE ULTIMATE ANSWER FOR EVERYONE?]
            </strong>
            <p style={{ margin: "8px 0 4px", color: "var(--text-bright)" }}>
              Is text-first architecture truly universally accessible, given
              that individuals with dyslexia, severe visual conditions, or
              language barriers may struggle with raw text?
            </p>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>
              <strong>[RESPONSE]</strong> We do not claim raw text is the single
              graphical destination for all human eyes. No static layout can
              serve all cognitive profiles simultaneously. Instead,{" "}
              <strong>AI serves as the real-time adaptive bridge</strong>
              —translating underlying data into voice streams, visual diagrams,
              tactile feedback, or simplified language tailored to individual
              needs. To make error-free AI translation possible, the core
              architecture must be{" "}
              <mark>
                100% legible, structured, and unambiguous to machine parsers
              </mark>
              . By establishing an uncompromising, token-efficient base, we
              ensure no user is excluded.
            </p>
          </div>

          <div>
            <strong>[Q2: IS THIS MERELY RETRO-NOSTALGIA?]</strong>
            <p style={{ margin: "8px 0 4px", color: "var(--text-bright)" }}>
              Why utilize a terminal aesthetic when modern hardware easily
              renders complex 3D scenes and heavy visual effects?
            </p>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>
              <strong>[RESPONSE]</strong> This is functional sovereignty. Modern
              decorative layers often introduce hidden input latency, battery
              consumption, and unpredictable layout thrashing. A monospaced,
              1px-bounded terminal layout delivers maximum information density,
              instant execution velocity, and total stability across all
              hardware tiers—from flagship workstations to legacy devices.
            </p>
          </div>

          <div>
            <strong>
              [Q3: HOW ARE GRAPHICAL DATA VISUALIZATIONS HANDLED?]
            </strong>
            <p style={{ margin: "8px 0 4px", color: "var(--text-bright)" }}>
              Does a text-first policy discard charts, maps, and spatial
              information?
            </p>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>
              <strong>[RESPONSE]</strong> We decouple <em>semantic truth</em>{" "}
              from <em>ephemeral visualization</em>. Visual charts frequently
              operate as inaccessible black boxes. In SIXIMA, raw data is
              structured as transparent, accessible key-value matrices first.
              Visual graphs exist purely as optional projection layers on top of
              clean data—never as substitutes for it.
            </p>
          </div>

          <div>
            <strong>
              [Q4: IS A TERMINAL ENVIRONMENT TOO INTIMIDATING FOR CASUAL USERS?]
            </strong>
            <p style={{ margin: "8px 0 4px", color: "var(--text-bright)" }}>
              Doesn't a monospaced command-line atmosphere alienate
              non-technical audiences?
            </p>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>
              <strong>[RESPONSE]</strong> Unpredictable interfaces with hidden
              menus create far more user anxiety than structured simplicity.
              When every interactive target is explicit and responsive, users
              rapidly develop trust and intuitive mastery. Furthermore, as AI
              agents handle complex workflows via natural language,
              deterministic UI serves as the safest, most transparent
              verification layer for users.
            </p>
          </div>
        </div>
      </section>

      {/* 06 / EVOLUTION & OPEN INVITATION */}
      <section className="section">
        <p className="label">06 / AN EVOLVING EXPERIMENT</p>
        <h2>SIXIMA IS A WORK IN PROGRESS // JOIN US</h2>
        <p>
          SIXIMA is in its formative stages. Our token parsers, accessibility
          patterns, component specifications, and UX workflows are continuously
          being challenged, tested, and rewritten. We do not operate behind
          closed doors—this is a living, collective experiment.
        </p>
        <p>
          Building an interface standard that truly accommodates every human
          cognitive profile while establishing seamless symbiosis with
          autonomous artificial intelligence cannot be accomplished in
          isolation.
          <strong>
            {" "}
            We need your perspectives, your critique, and your code.
          </strong>
        </p>

        <div className="research-list">
          <div>
            <strong>[ASSISTIVE TECH EVALUATION]</strong> &nbsp; Audit components
            using screen readers, switch-access inputs, eye-tracking hardware,
            and custom user agents.
          </div>
          <div>
            <strong>[SYSTEMS & APP ENGINEERING]</strong> &nbsp; Expand
            real-world UX applications (like <code>JAIBUS-app</code>), optimize
            frontend state mechanics, and build lightweight component ports.
          </div>
          <div>
            <strong>[AGENT PROTOCOL BENCHMARKING]</strong> &nbsp; Measure LLM
            context consumption, deterministic execution accuracy, and
            machine-parsing speed across SIXIMA environments.
          </div>
        </div>
      </section>

      {/* 07 / TRANSMISSION ENDPOINTS & ACTIONS */}
      <section className="section">
        <p className="label">07 / TRANSMISSION CHANNELS</p>
        <h2>BECOME PART OF THE ARCHITECTURE</h2>
        <p>
          Review our source code, file an accessibility issue, submit a pull
          request, or connect directly with the core team.
        </p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="https://github.com/sixima/sixima"
            target="_blank"
            rel="noreferrer"
          >
            <span className="github-mark">◉</span>
            <span>GITHUB: SIXIMA/SIXIMA</span>
            <span className="external">↗</span>
          </a>

          <a className="button" href="mailto:sixima@proton.me">
            <span>✉</span>
            <span>TRANSMIT DIRECT: SIXIMA@PROTON.ME</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="terminal-footer">
        <div>SIXIMA LABS // JAIST NODE</div>
        <div>DISPATCH: OPEN FOR COLLABORATION</div>
        <div>END OF TRANSMISSION_</div>
      </footer>
    </main>
  );
}

export default About;
