import NavBar from "../Components/NavBar";
import HeroSection from "../Sections/HeroSection";
import AboutSection from "../Sections/AboutSection";
import ProjectsSection from "../Sections/ProjectsSection";
import Footer from "../Components/Footer";
import useSEO from "../hooks/useSEO";

const LandingPage = () => {
    useSEO({
        title: "Raman's Studio — Front-End Developer & Designer",
        description: "Portfolio of Ramandeep Singh — a front-end developer with a background in design, specializing in motion design, interactive web experiences, and crafting premium digital interfaces.",
        path: "/",
    });

    return (
        <div className="flex flex-col items-center">
            <NavBar/>
            <HeroSection/>
            <AboutSection/>
            <ProjectsSection/>
            <Footer/>
        </div>
    );
};

export default LandingPage;