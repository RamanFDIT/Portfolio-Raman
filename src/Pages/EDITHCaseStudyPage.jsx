import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroSection from "../Sections/EDITH/HeroSection";
import ProblemSection from "../Sections/EDITH/ProblemSection";
import ArchitectureSection from "../Sections/EDITH/ArchitectureSection";
import UsersSection from "../Sections/EDITH/UsersSection";
import RoadmapSection from "../Sections/EDITH/RoadmapSection";
import useSEO from "../hooks/useSEO";

const EDITHCaseStudyPage = () => {
    useSEO({
        title: "E.D.I.T.H. Case Study — Raman's Studio",
        description: "Case study of E.D.I.T.H. — an AI-integrated capstone application. Exploring the architecture, problem space, and development roadmap.",
        path: "/projects/edith",
    });

    return (
        <div className="flex flex-col items-center">
            <NavBar />
            <HeroSection />
            <ProblemSection />
            <ArchitectureSection />
            <UsersSection />
            <RoadmapSection />
            <Footer />
        </div>
    );
};

export default EDITHCaseStudyPage;
