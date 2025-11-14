import { useState } from "react";

function SkillsForm({ formData, setFormData }) {
  const [skills, setSkills] = useState(formData.skillPoints || [""]);

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
    setFormData((prev) => ({
      ...prev,
      skillPoints: newSkills,
    }));
  };

  const addSkill = () => {
    if (skills.length < 6) {
      setSkills([...skills, ""]);
    }
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
    setFormData((prev) => ({
      ...prev,
      skillPoints: newSkills,
    }));
  };
  return (
    <>
      <div id="skills-form">
        <div id="skills-textbox">
          <h4 id="textbox-description">Add your skills here</h4>
          {skills.map((bullet, index) => (
            <div key={index} className="skill-input">
              <textarea
                placeholder={`Skill ${index + 1}`}
                value={bullet}
                onChange={(e) => handleSkillChange(index, e.target.value)}
              />
              {skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  id="remove-skill-btn"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          {skills.length < 6 && (
            <button type="button" onClick={addSkill} id="add-skill-btn">
              + Add another skill
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default SkillsForm;
