import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ContactPage from "./Pages/ContactPage";
import COVCaseStudyPage from "./Pages/COVCaseStudyPage";
import EDITHCaseStudyPage from "./Pages/EDITHCaseStudyPage";
import AscendCaseStudyPage from "./Pages/AscendCaseStudyPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
