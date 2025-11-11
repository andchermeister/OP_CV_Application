function Header({ page, formData }) {
  const getTitleNSubTitle = () => {
    switch (page) {
      case "contact":
        return [
          "Fill in the contact information for the recruiters",
          "Include your full name and at least email or phone number",
        ];
      case "experience":
        return [
          "Add your experience",
          "Start with your most recent job first. You can also add voluntary work, internships or extracurricular activities",
        ];
      case "roleDescription":
        return [
          `Tell us what you did as a ${
            formData.jobTitle || `"your job title"`
          }`,
        ];
      case "workHistory":
        return ["Review your work history"];
      case "education":
        return [
          "Add your education",
          "Tell us about any colleges, voactional programs, or a training courses you took. Even if you didn't finish, it's important to list them",
        ];
      case "reviewEducation":
        return ["Review your education"];
      case "skills":
        return ["Add your skills"];
      case "summary":
        return ["Add your summary"];
      default:
        return "";
    }
  };

  const titleNSubTitle = getTitleNSubTitle();
  const isArray = Array.isArray(titleNSubTitle);

  const keywords = [
    "contact",
    "information",
    "experience",
    formData.jobTitle || "job title",
  ];

  const renderTitle = (title) => {
    return title.split(" ").map((word, idx) =>
      keywords.includes(word) ? (
        <span key={idx} className="highlight">
          {word}{" "}
        </span>
      ) : (
        word + " "
      )
    );
  };
  return (
    <header>
      <h1 id="h1-header">
        {isArray ? renderTitle(titleNSubTitle[0]) : titleNSubTitle}
      </h1>
      {isArray && <h2 id="h2-sub-header">{titleNSubTitle[1]}</h2>}
    </header>
  );
}

export default Header;
