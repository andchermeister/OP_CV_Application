function RoleDescriptionForm({ pages, setPage, setPageIndex }) {
  const editExperience = () => {
    const experienceIndex = pages.indexOf("experience");
    setPageIndex(experienceIndex);
    setPage("experience");
  };
  return (
    <>
      <div id="RoleDescriptionForm">
        <div id="upperTextBox">
          <div id="workplace-and-button">
            <div id="workplace-and-position">
              <h2 id="workplace">The Florist</h2>
              <h3 id="position">Bartender</h3>
            </div>
            <div id="button-div">
              <button id="edit-button" onClick={editExperience}>
                Edit
              </button>
            </div>
          </div>
          <h3 id="address-and-duration">
            London, Hertfordshire Jun 2023 - Current
          </h3>
        </div>
        <div id="lowerTextBox">
          Describe what did you do in your position. Type your bullet points
          here.
        </div>
      </div>
    </>
  );
}

export default RoleDescriptionForm;
