import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroSection from "../Sections/EDITH/HeroSection";
import ProblemSection from "../Sections/EDITH/ProblemSection";
import ArchitectureSection from "../Sections/EDITH/ArchitectureSection";
import UsersSection from "../Sections/EDITH/UsersSection";
import RoadmapSection from "../Sections/EDITH/RoadmapSection";

const EDITHCaseStudyPage = () => {
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
