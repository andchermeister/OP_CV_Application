function CVPreview() {
  return (
    <section id="preview-section">
      <div id="preview-A4">
        <h1 id="first-name-surname-A4">FIRST NAME SURNAME</h1>
        <div className="separator-A4"></div>
        <div id="phone-number-email-A4">Phone | Email Address</div>
        <div id="h6-section">
          <h6 id="summary-A4" className="h6-info">
            Summary
          </h6>
          <div className="separator-A4"></div>
          <h6 id="exp-A4" className="h6-info">
            Experience
          </h6>
          <div className="separator-A4"></div>
          <h6 id="skills-A4" className="h6-info">
            Skills
          </h6>
          <div className="separator-A4"></div>
          <h6 id="edu-A4" className="h6-info">
            Education
          </h6>
          <div className="separator-A4"></div>
        </div>
      </div>
      <button id="viewTemplateBtn">View template</button>
    </section>
  );
}

export default CVPreview;
