import { useState } from "react";
import "./App.css";
import "./styles/CVPreview.css";
import "./styles/Header.css";
import "./styles/forms/ContactForm.css";
import "./styles/forms/ExperienceForm.css";
import "./styles/forms/RoleDescriptionForm.css";
import "./styles/Buttons.css";
import "./components/Header.jsx";
import Header from "./components/Header.jsx";
import ContactForm from "./components/forms/ContactForm.jsx";
import ExperienceForm from "./components/forms/ExperienceForm.jsx";
import RoleDescriptionForm from "./components/forms/RoleDescriptionForm.jsx";
import Buttons from "./components/Buttons.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const pages = [
    "contact",
    "experience",
    "roleDescription",
    "workHistory",
    "education",
    "reviewEducation",
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
    empoyer: "",
    startDate: "",
    endDate: "",
    cityOfWork: "",
    countyOfWork: "",
  });

  const [pageIndex, setPageIndex] = useState(0);
  const [page, setPage] = useState(pages[0]);
  return (
    <div className="App">
      <div>
        <Header page={page} />
        {page === "contact" && <ContactForm setFormData={setFormData} />}
        {page === "experience" && <ExperienceForm setFormData={setFormData} />}
        {page === "roleDescription" && <RoleDescriptionForm />}
        <Buttons
          pageIndex={pageIndex}
          page={page}
          pages={pages}
          setPage={setPage}
          setPageIndex={setPageIndex}
        />
      </div>
      <CVPreview formData={formData} />
    </div>
  );
}

export default App;
