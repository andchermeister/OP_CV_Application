import { useRef, useState } from "react";
import "./App.css";
import "./styles/CVPreview.css";
import "./styles/Header.css";
import "./styles/forms/ContactForm.css";
import "./styles/forms/ExperienceForm.css";
import "./styles/forms/RoleDescriptionForm.css";
import "./styles/forms/EducationForm.css";
import "./styles/forms/SkillsForm.css";
import "./styles/forms/SummaryForm.css";
import "./styles/Buttons.css";
import "./components/Header.jsx";
import Header from "./components/Header.jsx";
import ContactForm from "./components/forms/ContactForm.jsx";
import ExperienceForm from "./components/forms/ExperienceForm.jsx";
import RoleDescriptionForm from "./components/forms/RoleDescriptionForm.jsx";
import EducationForm from "./components/forms/EducationForm.jsx";
import SkillsForm from "./components/forms/SkillsForm.jsx";
import SummaryForm from "./components/forms/SummaryForm.jsx";
import Buttons from "./components/Buttons.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const contactFormRef = useRef(null);
  const experienceFormRef = useRef(null);
  const educationFormRef = useRef(null);

  const pages = [
    "contact",
    "experience",
    "roleDescription",
    "education",
    "skills",
    "summary",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    city: "",
    countyRegion: "",
    postCode: "",
    phone: "",
    email: "",
    jobTitle: "",
    employer: "",
    startDate: "",
    endDate: "",
    currentCheckbox: false,
    cityOfWork: "",
    countyOfWork: "",
    bulletPoints: [""],
    institution: "",
    cityOfInstitution: "",
    fieldOfStudy: "",
    qualification: "",
    startYear: "",
    graduationYear: "",
    eduCheckBox: false,
    grade: "",
    honours: "",
    skillPoints: [""],
    summary: "",
  });

  const [pageIndex, setPageIndex] = useState(0);
  const [page, setPage] = useState(pages[0]);

  return (
    <div className="App">
      <div>
        <Header page={page} formData={formData} />
        {page === "contact" && (
          <ContactForm
            contactFormRef={contactFormRef}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {page === "experience" && (
          <ExperienceForm
            experienceFormRef={experienceFormRef}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {page === "roleDescription" && (
          <RoleDescriptionForm
            pages={pages}
            setPage={setPage}
            setPageIndex={setPageIndex}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {page === "education" && (
          <EducationForm
            educationFormRef={educationFormRef}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {page === "skills" && (
          <SkillsForm formData={formData} setFormData={setFormData} />
        )}
        {page === "summary" && (
          <SummaryForm formData={formData} setFormData={setFormData} />
        )}
        <Buttons
          pageIndex={pageIndex}
          page={page}
          pages={pages}
          setPage={setPage}
          setPageIndex={setPageIndex}
          contactFormRef={contactFormRef}
          experienceFormRef={experienceFormRef}
          educationFormRef={educationFormRef}
        />
      </div>
      <CVPreview formData={formData} />
    </div>
  );
}

export default App;
