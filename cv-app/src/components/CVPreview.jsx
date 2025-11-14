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
          <div id="summary-section">{formData.summary || ""}</div>
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
                    {formData.startDate} to{" "}
                    {formData.currentCheckbox
                      ? "Current"
                      : formData.endDate || ""}
                  </div>
                )}
                {formData.cityOfWork ? formData.cityOfWork : ""}
                {formData.countyOfWork ? ", " + formData.countyOfWork : ""}
              </div>
            </div>
            <div id="lower-exp-section">
              <ul id="bullet-points">
                {formData.bulletPoints &&
                  formData.bulletPoints
                    .filter((point) => point && point.trim() !== "")
                    .map((point, index) => (
                      <li id="bullet-li" key={index}>
                        {point}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
          <h6 id="skills-A4" className="h6-info">
            Skills
          </h6>
          <div className="separator-A4"></div>
          <div id="skills-section">
            <ul id="skill-points">
              {formData.skillPoints &&
                formData.skillPoints
                  .filter((skill) => skill && skill.trim() !== "")
                  .map((skill, index) => (
                    <li id="skill-li" key={index}>
                      {skill}
                    </li>
                  ))}
            </ul>
          </div>
          <h6 id="edu-A4" className="h6-info">
            Education
          </h6>
          <div className="separator-A4"></div>
          <div id="education-section">
            <div id="quali-inst-grade-honours">
              <div id="qulification-and-field-of-study">
                {formData.qualification && formData.fieldOfStudy && (
                  <div>
                    {formData.qualification} of {formData.fieldOfStudy}
                  </div>
                )}
              </div>
              <div id="insitution">
                {formData.institution && <div>{formData.institution}</div>}
              </div>
              <div id="grade-and-honours">
                {formData.grade && formData.honours && (
                  <div>
                    {formData.grade} , {formData.honours}
                  </div>
                )}
              </div>
            </div>
            <div id="years-and-city-of-institution">
              {formData.startYear && (
                <div>
                  {formData.startYear} to{" "}
                  {formData.currentCheckbox
                    ? "Current"
                    : formData.graduationYear || ""}
                </div>
              )}
              {formData.cityOfInstitution && (
                <div>{formData.cityOfInstitution}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button id="viewTemplateBtn">View template</button>
    </section>
  );
}

export default CVPreview;
