import { useState, useImperativeHandle } from "react";

function EducationForm({ educationFormRef, formData, setFormData }) {
  const [isCurrent, setIsCurrent] = useState(formData.eduCheckBox || false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.institution || !formData.cityOfInstitution) {
      alert("Please fill in your insitution and city of institution.");
      return false;
    }
    if (!formData.fieldOfStudy || !formData.qualification) {
      alert("Please fill in your field of study and qualification.");
      return false;
    }
    if (!formData.startYear) {
      alert("Please set your start year.");
      return false;
    }
    if (!formData.graduationYear && !isCurrent) {
      alert("Please set the graduation year or current checkmark.");
      return false;
    }
    console.log("Education form submitted");
    return true;
  };

  useImperativeHandle(educationFormRef, () => ({
    submit: handleSubmit,
  }));

  const handleCheckBoxChange = (e) => {
    const checked = e.target.checked;
    setIsCurrent(checked);

    setFormData((prev) => ({
      ...prev,
      eduCheckBox: checked,
      graduationYear: checked ? "" : prev.endDate,
    }));
  };

  return (
    <>
      <form id="education-form" ref={educationFormRef} onSubmit={handleSubmit}>
        <div id="insitution-and-city">
          <div className="education-form">
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              name="institution"
              id="institution"
              required
              value={formData.institution}
              onChange={handleChange}
            />
          </div>
          <div className="education-form">
            <label htmlFor="cityOfInstitution">City</label>
            <input
              type="text"
              name="cityOfInstitution"
              id="cityOfInstitution"
              required
              value={formData.cityOfInstitution}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="field-of-study-and-quali">
          <div className="education-form">
            <label htmlFor="fieldOfStudy">Field of study</label>
            <input
              type="text"
              name="fieldOfStudy"
              id="fieldOfStudy"
              required
              value={formData.fieldOfStudy}
              onChange={handleChange}
            />
          </div>
          <div className="education-form">
            <label htmlFor="qualification">Qualification</label>
            <select
              name="qualification"
              id="qualification"
              required
              value={formData.qualification}
              onChange={handleChange}
            >
              <option value="" disabled>
                -- Select qualification --
              </option>
              <option value="HSD">High School Diploma</option>
              <option value="GSCEs">GSCEs</option>
              <option value="A-Levels">A-Levels</option>
              <option value="Bachelor">Bachelor's Degree</option>
              <option value="Master">Master's Degree</option>
              <option value="Doctor">Doctorate</option>
            </select>
          </div>
        </div>
        <div id="start-year-and-grad-year">
          <div className="education-form">
            <label htmlFor="startYear">Start year</label>
            <input
              type="number"
              name="startYear"
              id="startYear"
              required
              min="1950"
              max={new Date().getFullYear()}
              value={formData.startYear}
              onChange={handleChange}
            />
          </div>
          <div className="education-form">
            <label htmlFor="graduationYear">Graduation year</label>
            <input
              type="number"
              name="graduationYear"
              id="graduationYear"
              required
              min="1950"
              max={new Date().getFullYear()}
              value={formData.graduationYear}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="checkBoxDiv" className="education-form">
          <input
            type="checkbox"
            name="eduCheckBox"
            id="eduCheckBox"
            checked={isCurrent}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="eduCheckBox">Currently enrolled </label>
        </div>
        <div id="grade-and-honours">
          <div className="education-form">
            <label htmlFor="grade">Grade (Optional)</label>
            <input
              type="text"
              name="grade"
              id="grade"
              value={formData.grade}
              onChange={handleChange}
            />
          </div>
          <div className="education-form">
            <label htmlFor="honours">Honours (Optional)</label>
            <input
              type="text"
              name="honours"
              id="honours"
              value={formData.honours}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default EducationForm;
