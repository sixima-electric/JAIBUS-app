import "./layouts/base.css";

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
          JAIBUS <br /> KOMATSU LINE{" "}
        </h1>{" "}
        <p className="sub"> JAIST SHUTTLE BUS / ANDROID CLIENT </p>{" "}
        <div className="hero-actions">
          {" "}
          <a className="button button-primary" href="/downloads/JAIBUS.apk">
            {" "}
            <span className="button-icon">↓</span> DOWNLOAD FOR ANDROID{" "}
          </a>{" "}
        </div>{" "}
      </section>{" "}
      <hr /> {/* Navigation */}{" "}
      <section className="section">
        {" "}
        <p className="label">01 / NAVIGATION</p> <h2>DOCUMENT INDEX</h2>{" "}
        <div className="nav-list">
          {" "}
          <a className="nav-item" href="/jaibus">
            {" "}
            <span className="nav-number">01</span>{" "}
            <span className="nav-content">
              {" "}
              <strong>ABOUT JAIBUS</strong>{" "}
              <small>Application overview and features</small>{" "}
            </span>{" "}
            <span className="nav-arrow">→</span>{" "}
          </a>{" "}
          <a className="nav-item" href="/privacy">
            {" "}
            <span className="nav-number">02</span>{" "}
            <span className="nav-content">
              {" "}
              <strong>PRIVACY / SECURITY</strong>{" "}
              <small>Security and data handling</small>{" "}
            </span>{" "}
            <span className="nav-arrow">→</span>{" "}
          </a>{" "}
          <a className="nav-item" href="/terms">
            {" "}
            <span className="nav-number">03</span>{" "}
            <span className="nav-content">
              {" "}
              <strong>TERMS OF USE</strong>{" "}
              <small>Terms and conditions</small>{" "}
            </span>{" "}
            <span className="nav-arrow">→</span>{" "}
          </a>{" "}
          <a className="nav-item" href="/status">
            {" "}
            <span className="nav-number">04</span>{" "}
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
