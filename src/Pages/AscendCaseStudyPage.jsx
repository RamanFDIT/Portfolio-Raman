import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroSection from "../Sections/Ascend/HeroSection";
import WhySection from "../Sections/Ascend/WhySection";
import FeaturesSection from "../Sections/Ascend/FeaturesSection";
import UserSection from "../Sections/Ascend/UserSection";
import DesignSection from "../Sections/Ascend/DesignSection";

const AscendCaseStudyPage = () => {
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
