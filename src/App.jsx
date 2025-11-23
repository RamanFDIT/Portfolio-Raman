import NavBar from "./Components/NavBar";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={ <Projects />} />
        </Routes>
      </BrowserRouter>
  );
}