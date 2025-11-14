import { useRef } from "react";

function CVPreview({
  formData,
  page,
  pageIndex,
  pages,
  setPageIndex,
  setPage,
}) {
  const prevPageIndexRef = useRef(null);

  const viewTemplate = () => {
    prevPageIndexRef.current = pageIndex;
    setPageIndex(pages.length - 1);
    setPage("template");
  };

  const previous = () => {
    if (prevPageIndexRef.current !== null) {
      const prevIndex = prevPageIndexRef.current;
      setPageIndex(prevIndex);
      setPage(pages[prevIndex]);
      prevPageIndexRef.current = null;
      return;
    }
    setPageIndex(pageIndex - 1);
    setPage(pages[pageIndex - 1]);
  };

  const editPage = (pageName) => {
    if (pages.includes(pageName)) {
      setPageIndex(pages.indexOf(pageName));
      setPage(pageName);
    }
  };

  return (
    <section
      id="preview-section"
      className={page === "template" ? "full-preview" : ""}
    >
      <div id="preview-A4">
        <div className="flexbox-row">
          <h1 id="first-name-surname-A4">
            {formData.firstName || "FIRST NAME"} {formData.surname || "SURNAME"}
          </h1>
          <button className="edit-btns" onClick={() => editPage("contact")}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
        </div>
        <div className="separator-A4"></div>
        <div id="phone-number-email-A4">
          {formData.city ? formData.city + " " : "City"}
          {formData.countyRegion + " " || ""}
          {formData.postCode + " " || ""} | {formData.phone || "Phone"} |{" "}
          {formData.email || "Email Address"}
        </div>
        <div id="h6-section">
          <div className="flexbox-row">
            <h6 id="summary-A4" className="h6-info">
              Summary
            </h6>
            <button className="edit-btns" onClick={() => editPage("summary")}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
          <div className="separator-A4"></div>
          <div id="summary-section">{formData.summary || ""}</div>
          <div className="flexbox-row">
            <h6 id="exp-A4" className="h6-info">
              Experience
            </h6>
            <button
              className="edit-btns"
              onClick={() => editPage("experience")}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
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
          <div className="flexbox-row" onClick={() => editPage("skills")}>
            <h6 id="skills-A4" className="h6-info">
              Skills
            </h6>
            <button className="edit-btns">
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
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
          <div className="flexbox-row" onClick={() => editPage("education")}>
            <h6 id="edu-A4" className="h6-info">
              Education
            </h6>
            <button className="edit-btns">
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
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
      <button
        id="viewTemplateBtn"
        onClick={page === "template" ? previous : viewTemplate}
      >
        {page === "template" ? "Back" : "View Template"}
      </button>
    </section>
  );
}

export default CVPreview;
