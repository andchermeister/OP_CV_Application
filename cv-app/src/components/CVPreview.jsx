function CVPreview({ formData }) {
  return (
    <section id="preview-section">
      <div id="preview-A4">
        <h1 id="first-name-surname-A4">
          {formData.firstName || "FIRST NAME"} {formData.surname || "SURNAME"}
        </h1>
        <div className="separator-A4"></div>
        <div id="phone-number-email-A4">
          {formData.city ? formData.city + " " : "City"}
          {formData.countyRegion + " " || ""}
          {formData.postCode + " " || ""} | {formData.phone || "Phone"} |{" "}
          {formData.email || "Email Address"}
        </div>
        <div id="h6-section">
          <h6 id="summary-A4" className="h6-info">
            Summary
          </h6>
          <div className="separator-A4"></div>
          <h6 id="exp-A4" className="h6-info">
            Experience
          </h6>
          <div className="separator-A4"></div>
          <div id="experience-section">
            <div id="upper-exp-section">
              <div>
                {formData.jobTitle && <div>{formData.jobTitle}</div>}
                {formData.employer && <div>{formData.employer}</div>}
              </div>
              <div>
                {formData.startDate && (
                  <div>
                    {formData.endDate
                      ? formData.startDate + " to " + formData.endDate
                      : formData.startDate + " "}
                  </div>
                )}
                {formData.cityOfWork ? formData.cityOfWork : ""}
                {formData.countyOfWork ? ", " + formData.countyOfWork : ""}
              </div>
            </div>
            <div id="lower-exp-section">
              <ul id="bullet-points">
                {formData.bulletPoints &&
                  formData.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
              </ul>
            </div>
          </div>
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
