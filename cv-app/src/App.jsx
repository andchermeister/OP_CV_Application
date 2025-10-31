import { useState } from "react";
import "./App.css";
import "./styles/CVPreview.css";
import "./styles/Header.css";
import "./styles/Form.css";
import "./styles/Buttons.css";
import "./components/Header.jsx";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
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
  const [pageIndex, setPageIndex] = useState(0);
  const [page, setPage] = useState(pages[0]);
  return (
    <div className="App">
      <div>
        <Header page={page} />
        <Form />
        <Buttons
          pageIndex={pageIndex}
          pages={pages}
          setPage={setPage}
          setPageIndex={setPageIndex}
        />
      </div>
      <CVPreview />
    </div>
  );
}

export default App;
