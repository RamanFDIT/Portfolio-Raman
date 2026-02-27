import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroSection from "../Sections/COV/HeroSection";
import OverviewSection from "../Sections/COV/OverviewSection";
import ProcessSection from "../Sections/COV/ProcessSection";
import ChallengesSection from "../Sections/COV/ChallengesSection";
import OutcomeSection from "../Sections/COV/OutcomeSection";
import useSEO from "../hooks/useSEO";

const COVCaseStudyPage = () => {
    useSEO({
        title: "COVID Dashboard Case Study — Raman's Studio",
        description: "A deep dive into the design and development of a COVID-19 data dashboard — exploring process, challenges, and outcomes.",
        path: "/projects/dashboard",
    });

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
