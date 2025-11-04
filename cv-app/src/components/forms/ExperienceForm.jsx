function ExperienceForm({ setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form id="contact-form">
        <div id="job-title-and-empoyer">
          <div className="experience-form">
            <label htmlFor="jobTitle">Job title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              required
              onChange={handleChange}
            />
          </div>
          <div className="experience-form">
            <label htmlFor="empoyer">Employer</label>
            <input
              type="text"
              name="empoyer"
              id="empoyer"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="start-date-and-end-date">
          <div className="experience-form">
            <label htmlFor="startDate">Start date</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              required
              onChange={handleChange}
            />
          </div>
          <div className="experience-form">
            <label htmlFor="endDate">End date</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="experience-form">
          <label htmlFor="currentlyWork">I currently work here </label>
          <input type="checkbox" name="currentCheckbox" id="currentCheckbox" />
        </div>
        <div id="city-and-county">
          <div className="experience-form">
            <label htmlFor="cityOfWork">City (Optional)</label>
            <input
              type="text"
              name="cityOfWork"
              id="cityOfWork"
              onChange={handleChange}
            />
          </div>
          <div className="experience-form">
            <label htmlFor="countyOfWork">County (Optional)</label>
            <input
              type="text"
              name="countyOfWork"
              id="countyOfWork"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ExperienceForm;
