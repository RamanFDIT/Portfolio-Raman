import NavBar from "./Components/NavBar";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={ <Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
  );
}