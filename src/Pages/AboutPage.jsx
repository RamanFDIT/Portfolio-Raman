import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import IntroSection from "../Sections/About/IntroSection";
import WhySection from "../Sections/About/WhySection";
import JourneySection from "../Sections/About/JourneySection";
import VisionSection from "../Sections/About/VisionSection";
import BeyondCodeSection from "../Sections/About/BeyondCodeSection";

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center">
            <NavBar />
            <IntroSection />
            <WhySection />
            <JourneySection />
            <VisionSection />
            <BeyondCodeSection />
            <Footer />
        </div>
    );
};

export default AboutPage;
