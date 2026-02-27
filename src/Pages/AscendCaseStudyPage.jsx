import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroSection from "../Sections/Ascend/HeroSection";
import WhySection from "../Sections/Ascend/WhySection";
import FeaturesSection from "../Sections/Ascend/FeaturesSection";
import UserSection from "../Sections/Ascend/UserSection";
import DesignSection from "../Sections/Ascend/DesignSection";
import useSEO from "../hooks/useSEO";

const AscendCaseStudyPage = () => {
    useSEO({
        title: "Ascend Case Study — Raman's Studio",
        description: "Case study of Ascend — exploring the design system, features, user research, and visual design behind the project.",
        path: "/projects/ascend",
    });

    return (
        <div className="flex flex-col items-center">
            <NavBar />
            <HeroSection />
            <WhySection />
            <FeaturesSection />
            <UserSection />
            <DesignSection />
            <Footer />
        </div>
    );
};

export default AscendCaseStudyPage;
