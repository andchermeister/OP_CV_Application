import { useState } from "react";

function RoleDescriptionForm({
  pages,
  setPage,
  setPageIndex,
  formData,
  setFormData,
}) {
  const editExperience = () => {
    const experienceIndex = pages.indexOf("experience");
    setPageIndex(experienceIndex);
    setPage("experience");
  };

  const [bullets, setBullets] = useState(formData.bulletPoints || [""]);

  const handleBulletChange = (index, value) => {
    const newBullets = [...bullets];
    newBullets[index] = value;
    setBullets(newBullets);
    setFormData((prev) => ({
      ...prev,
      bulletPoints: newBullets,
    }));
  };

  const addBullet = () => {
    if (bullets.length < 5) {
      setBullets([...bullets, ""]);
    }
  };

  const removeBullet = (index) => {
    const newBullets = bullets.filter((_, i) => i !== index);
    setBullets(newBullets);
    setFormData((prev) => ({
      ...prev,
      bulletPoints: newBullets,
    }));
  };

  return (
    <>
      <div id="RoleDescriptionForm">
        <div id="upperTextBox">
          <div id="workplace-and-button">
            <div id="workplace-and-position">
              <h2 id="workplace">{formData.employer}</h2>
              <h3 id="position">{formData.jobTitle}</h3>
            </div>
            <div id="button-div">
              <button id="edit-button" onClick={editExperience}>
                Edit
              </button>
            </div>
          </div>
          <h3 id="address-and-duration">
            {`${formData.cityOfWork ? formData.cityOfWork + ", " : ""} ${
              formData.countyOfWork ? formData.countyOfWork + ", " : ""
            } ${formData.startDate ? formData.startDate : ""} - ${
              formData.endDate ? formData.endDate : ""
            }`}
          </h3>
        </div>
        <div id="lowerTextBox">
          <h4 id="textbox-description">
            Describe what did you do in your position. Type your bullet points
            here. (up to 5)
          </h4>

          {bullets.map((bullet, index) => (
            <div key={index} className="bullet-input">
              <textarea
                placeholder={`Bullet point ${index + 1}`}
                value={bullet}
                onChange={(e) => handleBulletChange(index, e.target.value)}
              />
              {bullets.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeBullet(index)}
                  id="remove-bullet-btn"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          {bullets.length < 5 && (
            <button type="button" onClick={addBullet} id="add-bullet-btn">
              + Add another bullet
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default RoleDescriptionForm;
