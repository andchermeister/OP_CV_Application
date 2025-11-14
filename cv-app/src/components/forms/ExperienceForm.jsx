import { useState, useImperativeHandle, useEffect } from "react";

function ExperienceForm({ experienceFormRef, formData, setFormData }) {
  const [isCurrent, setIsCurrent] = useState(formData.currentCheckbox || false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckBoxChange = (e) => {
    const checked = e.target.checked;
    setIsCurrent(checked);

    setFormData((prev) => ({
      ...prev,
      currentCheckbox: checked,
      endDate: checked ? "" : prev.endDate,
    }));
  };

  const handleSubmit = () => {
    if (!formData.jobTitle || !formData.employer) {
      alert("Please fill in your job title and employer");
      return false;
    }
    if (!formData.startDate) {
      alert("Please set your start date.");
      return false;
    }
    if (!formData.endDate && !isCurrent) {
      alert("Please set the end date or current checkmark.");
      return false;
    }
    if (!isCurrent && formData.startDate > formData.endDate) {
      alert("Start date can not be later than end date.");
      return false;
    }
    console.log("Experience form submitted");
    return true;
  };

  useImperativeHandle(experienceFormRef, () => ({
    submit: handleSubmit,
  }));

  useEffect(() => {
    setIsCurrent(Boolean(formData.currentCheckbox));
  }, [formData.currentCheckbox]);

  return (
    <>
      <form
        id="experience-form"
        ref={experienceFormRef}
        onSubmit={handleSubmit}
      >
        <div id="job-title-and-employer">
          <div className="experience-form">
            <label htmlFor="jobTitle">Job title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              required
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="experience-form">
            <label htmlFor="employer">Employer</label>
            <input
              type="text"
              name="employer"
              id="employer"
              required
              value={formData.employer}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="start-date-and-end-date">
          <div className="experience-form">
            <label htmlFor="startDate">Start date</label>
            <input
              type="month"
              name="startDate"
              id="startDate"
              required
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="experience-form">
            <label htmlFor="endDate">End date</label>
            <input
              type="month"
              name="endDate"
              id="endDate"
              disabled={isCurrent}
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="checkBoxDiv" className="experience-form">
          <input
            type="checkbox"
            name="currentCheckbox"
            id="currentCheckbox"
            checked={isCurrent}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="currentCheckbox">I currently work here </label>
        </div>
        <div id="city-and-county">
          <div className="experience-form">
            <label htmlFor="cityOfWork">City (Optional)</label>
            <input
              type="text"
              name="cityOfWork"
              id="cityOfWork"
              value={formData.cityOfWork}
              onChange={handleChange}
            />
          </div>
          <div className="experience-form">
            <label htmlFor="countyOfWork">County (Optional)</label>
            <input
              type="text"
              name="countyOfWork"
              id="countyOfWork"
              value={formData.countyOfWork}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ExperienceForm;
