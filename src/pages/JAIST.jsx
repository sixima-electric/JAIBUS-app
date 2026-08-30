import "./layouts/base.css";
function JAIST() {
  return (
    <main className="terminal">
      {" "}
      <header className="terminal-header">
        {" "}
        <div>JAIST INFORMATION SYSTEM</div> <div>NODE: JAIST-01</div>{" "}
      </header>{" "}
      <hr />{" "}
      <section className="title">
        {" "}
        <p className="label">[ INSTITUTION PROFILE ]</p>{" "}
        <h1>
          {" "}
          JAPAN ADVANCED INSTITUTE <br /> OF SCIENCE AND TECHNOLOGY{" "}
        </h1>{" "}
        <p className="sub"> 北陸先端科学技術大学院大学 </p>{" "}
      </section>{" "}
      <hr />{" "}
      <section className="section">
        {" "}
        <p className="label">01 / OVERVIEW</p> <h2>ABOUT JAIST</h2>{" "}
        <p>
          {" "}
          Japan Advanced Institute of Science and Technology is a graduate
          university specializing in advanced science and technology.{" "}
        </p>{" "}
        <p>
          {" "}
          JAIST provides an environment where researchers and students from
          different fields work together to explore new technologies and
          ideas.{" "}
        </p>{" "}
      </section>{" "}
      <hr />{" "}
      <section className="section">
        {" "}
        <p className="label">02 / LOCATION</p> <h2>ASAHIDAI CAMPUS</h2>{" "}
        <div className="data-table">
          {" "}
          <div>
            {" "}
            <span>LOCATION</span> <span>NOMI, ISHIKAWA, JAPAN</span>{" "}
          </div>{" "}
          <div>
            {" "}
            <span>LATITUDE</span> <span>36.4 N</span>{" "}
          </div>{" "}
          <div>
            {" "}
            <span>LONGITUDE</span> <span>136.6 E</span>{" "}
          </div>{" "}
          <div>
            {" "}
            <span>REGION</span> <span>HOKURIKU</span>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <hr />{" "}
      <section className="section">
        {" "}
        <p className="label">03 / RESEARCH</p> <h2>RESEARCH AREAS</h2>{" "}
        <div className="research-list">
          {" "}
          <div>[01] INFORMATION SCIENCE</div> <div>[02] KNOWLEDGE SCIENCE</div>{" "}
          <div>[03] MATERIALS SCIENCE</div>{" "}
          <div>[04] ENVIRONMENTAL SCIENCE</div> <div>[05] ROBOTICS</div>{" "}
          <div>[06] ARTIFICIAL INTELLIGENCE</div>{" "}
        </div>{" "}
      </section>{" "}
      <hr />{" "}
      <section className="section">
        {" "}
        <p className="label">04 / MESSAGE</p> <h2>ADVANCED KNOWLEDGE</h2>{" "}
        <p className="quote">
          {" "}
          "Creating knowledge beyond existing boundaries."{" "}
        </p>{" "}
        <p>
          {" "}
          JAIST brings together people, knowledge, and technology to investigate
          problems that cannot be solved from a single perspective.{" "}
        </p>{" "}
      </section>{" "}
      <hr />{" "}
      <footer className="terminal-footer">
        {" "}
        <div>SYSTEM STATUS: ONLINE</div> <div>JAIST INFORMATION DATABASE</div>{" "}
        <div>END OF DOCUMENT_</div>{" "}
      </footer>{" "}
    </main>
  );
}
export default JAIST;
