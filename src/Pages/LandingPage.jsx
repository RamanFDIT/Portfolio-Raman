import NavBar from "../Components/NavBar";
import HeroSection from "../Sections/HeroSection";
import AboutSection from "../Sections/AboutSection";
import ProjectsSection from "../Sections/ProjectsSection";
import Footer from "../Components/Footer";

const LandingPage = () => {
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