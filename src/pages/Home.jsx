import "./layouts/sixima.css";

function Home() {
  return (
    <main className="terminal">
      {" "}
      {/* Header */}{" "}
      <header className="terminal-header">
        {" "}
        <div className="brand">
          {" "}
          <img src="/favicon.svg" alt="" className="brand-icon" />{" "}
          <span>JAIBUS INFORMATION SYSTEM</span>{" "}
        </div>{" "}
        <div>ACCESS: PUBLIC</div>{" "}
      </header>{" "}
      <hr /> {/* Hero */}{" "}
      <section className="title">
        {" "}
        <p className="label">[ APPLICATION IDENTIFICATION ]</p>{" "}
        <h1>
          {" "}
          WE ARE SIXIMA DEVELOPERS <br />{" "}
        </h1>{" "}
        <p className="sub">
          {" "}
          A RETRO-FUTURISTIC UI / AI-FRIENDLY AND TEXT BASE UX{" "}
        </p>{" "}
        <div>
          <p>
            <strong>SIXIMA</strong> is an experimental interface research
            initiative established at the{" "}
            <code>
              Japan Advanced Institute of Science and Technology (JAIST)
            </code>
            . Our primary mission is to pioneer a dual-paradigm interaction
            model: architecting systems that are not solely{" "}
            <mark>Human-Friendly</mark>, but fundamentally{" "}
            <mark>AI-Friendly</mark>. As autonomous agents, LLMs, and synthetic
            intelligences increasingly navigate and manipulate software
            alongside people, user interfaces can no longer be optimized
            exclusively for human visual perception.
          </p>

          <p>
            Our foundational release, <code>sixima-ui</code>, introduces a
            high-density, retro-futuristic terminal environment defined by
            monospaced typography, strict spatial containment, and
            phosphor-grade luminance contrast. In an era where modern web
            development often defaults to bloated asset bundles, excessive
            script overhead, and decorative animations that obscure raw data,
            <code>sixima-ui</code> poses a foundational question:
            <em>
              Why construct fragile, heavy visual layers when structured,
              text-first clarity offers superior cognitive velocity and
              execution efficiency?
            </em>
          </p>

          <p>
            The core philosophy converges on two critical imperatives:{" "}
            <strong>Artificial Intelligence</strong> and{" "}
            <strong>Diversity</strong>. For AI agents, a semantic, structured,
            text-driven DOM drastically reduces token serialization overhead,
            eliminates DOM parsing ambiguities, and facilitates deterministic,
            zero-error machine interaction. For human users, it guarantees
            universal accessibility—ensuring instant rendering on
            resource-constrained hardware, eliminating sensory fatigue, and
            providing absolute legibility across diverse physical and cognitive
            environments. SIXIMA bridges the boundary between human intent and
            machine execution through radical structural simplicity.
          </p>
        </div>
      </section>{" "}
      <hr /> {/* Navigation */}{" "}
      <section className="section">
        <p className="label">00 / ANOUNCEMENT</p> <h2>PICK-UP INFORMATION</h2>{" "}
        <div>
          We, sixima developers team currently published an useful app which
          make the reservation for jaist shuttle bus/ komatsu line easy. You can
          download <code>JIABUS-app</code> from the button below! For, iOS
          users, we sinceally appologies that this app is only for designed for
          Android as of today.
        </div>
        <div className="hero-actions">
          {" "}
          <a className="button button-primary" href="/downloads/JAIBUS.apk">
            {" "}
            <span className="button-icon">↓</span> DOWNLOAD FOR ANDROID{" "}
          </a>{" "}
        </div>{" "}
        {/*section */}
      </section>
      <section className="section">
        <p className="label">01 / NAVIGATION</p> <h2>DOCUMENT INDEX</h2>{" "}
        <div className="nav-list">
          {" "}
          {/*about */}
          <a className="nav-item" href="/about">
            {" "}
            <span className="nav-number">00</span>{" "}
            <span className="nav-content">
              {" "}
              <strong>ABOUT US</strong>{" "}
              <small>INTORODUCE SIXIMA DEV TEAM</small>{" "}
            </span>{" "}
            <span className="nav-arrow">→</span>{" "}
          </a>{" "}
          {/*sixima */}
          <a className="nav-item" href="/sixima">
            {" "}
            <span className="nav-number">01</span>{" "}
            <span className="nav-content">
              {" "}
              <strong>SIXIMA-UI DESIGN POLICY</strong>{" "}
              <small>How to implement/use SIXIMA-UI</small>{" "}
            </span>{" "}
            <span className="nav-arrow">→</span>{" "}
          </a>{" "}
          <a className="nav-item" href="/jaibus">
            {" "}
            <span className="nav-number">01</span>{" "}
            <span className="nav-content">
              {" "}
              <strong>ABOUT JAISBUS</strong>{" "}
              <small>Application overview and features</small>{" "}
            </span>{" "}
            <span className="nav-arrow">→</span>{" "}
          </a>{" "}
          <a className="nav-item" href="/privacy">
            {" "}
            <span className="nav-number">03</span>{" "}
            <span className="nav-content">
              {" "}
              <strong>PRIVACY / SECURITY</strong>{" "}
              <small>Security and data handling</small>{" "}
            </span>{" "}
            <span className="nav-arrow">→</span>{" "}
          </a>{" "}
          <a className="nav-item" href="/terms">
            {" "}
            <span className="nav-number">04</span>{" "}
            <span className="nav-content">
              {" "}
              <strong>TERMS OF USE</strong>{" "}
              <small>Terms and conditions</small>{" "}
            </span>{" "}
            <span className="nav-arrow">→</span>{" "}
          </a>{" "}
          <a className="nav-item" href="/status">
            {" "}
            <span className="nav-number">05</span>{" "}
            <span className="nav-content">
              {" "}
              <strong>SYSTEM STATUS</strong>{" "}
              <small>Service and system information</small>{" "}
            </span>{" "}
            <span className="nav-arrow">→</span>{" "}
          </a>{" "}
        </div>{" "}
      </section>{" "}
      <hr /> {/* Project */}{" "}
      <section className="section">
        {" "}
        <p className="label">02 / DEVELOPMENT</p> <h2>PROJECT SOURCE</h2>{" "}
        <p>
          {" "}
          JAIBUS-app is developed as an open-source project. Source code and
          development information are available on GitHub.{" "}
        </p>{" "}
        <div className="hero-actions">
          {" "}
          <a
            className="button"
            href="https://github.com/ynk-samez/JAIBUS-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <span className="github-mark">◉</span> VIEW SOURCE CODE{" "}
            <span className="external">↗</span>{" "}
          </a>{" "}
        </div>{" "}
      </section>{" "}
      <hr /> {/* Contact */}{" "}
      <section className="section">
        {" "}
        <p className="label">03 / CONTACT</p> <h2>DEVELOPER</h2>{" "}
        <div className="data-table">
          {" "}
          <div>
            {" "}
            <span>NAME</span> <span>sixima</span>{" "}
          </div>{" "}
          <div>
            {" "}
            <span>EMAIL</span>{" "}
            <span>
              {" "}
              <a href="mailto:sixima@proton.me"> sixima@proton.me </a>{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <hr /> {/* Notice */}{" "}
      <section className="section notice">
        {" "}
        <p className="label">04 / NOTICE</p> <h2>UNOFFICIAL APPLICATION</h2>{" "}
        <p>
          {" "}
          JAIBUS-app is an independent, unofficial client and is not operated,
          maintained, or endorsed by JAIST.{" "}
        </p>{" "}
      </section>{" "}
      <hr /> {/* Footer */}{" "}
      <footer className="terminal-footer">
        {" "}
        <div>JAIBUS INFORMATION SYSTEM</div> <div>SYSTEM STATUS: ONLINE</div>{" "}
        <div>END OF DOCUMENT_</div>{" "}
      </footer>{" "}
    </main>
  );
}
export default Home;
