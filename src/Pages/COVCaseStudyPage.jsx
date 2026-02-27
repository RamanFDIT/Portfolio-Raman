import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroSection from "../Sections/COV/HeroSection";
import OverviewSection from "../Sections/COV/OverviewSection";
import ProcessSection from "../Sections/COV/ProcessSection";
import ChallengesSection from "../Sections/COV/ChallengesSection";
import OutcomeSection from "../Sections/COV/OutcomeSection";

const COVCaseStudyPage = () => {
    return (
        <div className="flex flex-col items-center">
            <NavBar />
            <HeroSection />
            <OverviewSection />
            <ProcessSection />
            <ChallengesSection />
            <OutcomeSection />
            <Footer />
        </div>
    );
};

export default COVCaseStudyPage;
