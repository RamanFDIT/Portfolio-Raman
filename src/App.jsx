import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ContactPage from "./Pages/ContactPage";
import COVCaseStudyPage from "./Pages/COVCaseStudyPage";
import EDITHCaseStudyPage from "./Pages/EDITHCaseStudyPage";
import AscendCaseStudyPage from "./Pages/AscendCaseStudyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/dashboard" element={<COVCaseStudyPage />} />
        <Route path="/projects/edith" element={<EDITHCaseStudyPage />} />
        <Route path="/projects/ascend" element={<AscendCaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
