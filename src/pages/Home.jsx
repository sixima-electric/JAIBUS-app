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
            Born at the{" "}
            <code>
              Japan Advanced Institute of Science and Technology (JAIST)
            </code>
            ,<strong>SIXIMA</strong> confronts a systemic failure in how we
            build the digital world. For too long, society has conveniently
            divided humanity into two rigid categories: the "able-bodied" and
            the "disabled." Under this false binary, technology is built for the
            majority, while accessibility is treated as a charitable
            afterthought—a band-aid slapped onto a finished product. Behind the
            beautiful illusion of "Universal Design," countless individuals have
            been quietly left out of our digital society. We have collectively
            turned a blind eye. We must put an end to this.
          </p>

          <p>
            We refuse to accept the classification of human beings into the
            capable and the incapable. The reality is that the spectrum of human
            struggle exists far beyond medical labels. Even among those
            traditionally deemed "normal," invisible barriers persist every day.
            It is the neurodivergent individual who struggles to process a
            clustered screen despite the information being right in front of
            them. It is the aging user whose hands can no longer comfortably
            reach the edge of a display. It is the person experiencing cognitive
            fatigue who must re-read a single paragraph five times to grasp its
            meaning. It is those who fundamentally cannot rely on visual
            representations to navigate the world.
          </p>

          <p>
            Our mission statement is absolute:{" "}
            <strong>Literally leave no one behind.</strong>
          </p>

          <p>
            To realize this, the era of forcing humans to adapt to rigid
            software must end; the software must adapt to the human. Designing
            an architecture that is <mark>AI-Friendly</mark> is not our ultimate
            goal—it is strictly the means to this end. By abandoning visual
            bloat and providing a perfectly structured, deterministic HTML/CSS
            foundation, we empower autonomous AI to act as a real-time,
            personalized translator. The AI reads our zero-ambiguity structure
            and dynamically reconstructs the interface—whether as a
            high-contrast text layout, a rich GUI, or a synthesized
            voice—perfectly calibrated to the individual's immediate needs.
          </p>

          <p>
            We are not just theorizing about a more inclusive future. This very
            website is the living sample implementation of our philosophy. Built
            upon the <code>sixima-ui</code> framework, it stands as proof that
            when we prioritize structural truth over superficial design, we can
            finally build a digital reality that embraces the totality of the
            human experience.
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
              <strong>ABOUT JAISBUS/FOR JAIST STUDENTS</strong>{" "}
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
