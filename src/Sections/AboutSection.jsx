import { Link } from "react-router-dom";
import ButtonPrimary from "../Components/ButtonPrimary";
import useReveal from "../hooks/useReveal";

const AboutSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return(
        <section id="about" ref={sectionRef} className="section w-full max-w-400 h-auto min-h-screen flex items-center justify-center px-4 py-20 lg:py-0 lg:h-screen">
            <div className="flex flex-col items-start lg:items-center">
                <div className="flex flex-col lg:flex-row justify-center w-full lg:w-310 gap-6 lg:gap-0">
                    <p data-reveal className="text-base md:text-xl font-body w-full lg:w-78 order-2 lg:order-1">Obsession is a superpower. Whether analyzing the rapid-fire rhythm of an Eminem track, strategizing the next move on a chessboard, solving a Rubik's cube, or architecting a complex React component, the approach remains identical: diving all the way in and figuring out exactly how the underlying logic works.</p>
                    <h2 data-reveal className="text-7xl md:text-9xl xl:text-[180px] font-semibold text-left lg:text-center order-1 lg:order-2">Raman</h2>
                    <p data-reveal className="hidden lg:block text-base md:text-xl font-body w-full lg:w-90 text-left lg:text-right lg:h-54 order-3">Currently completing the FDIT program at KPU, the daily drive is about turning ambitious, sci-fi concepts into tangible digital realities. Taking a project like the E.D.I.T.H. capstone from a raw idea to a fully functional, AI-integrated application requires a deep-dive focus. It is not just about writing code; it is about living the project until the architecture is flawless.</p>
                </div>   
                <div data-reveal className="flex flex-col items-start lg:items-center mt-6 lg:mt-0">
                    <Link to="/about">
                        <ButtonPrimary label="Know More"/>
                    </Link>
                    <p className="hidden lg:block text-base md:text-xl font-body w-full lg:w-310 text-center mt-4">The digital landscape moves fast, and the target is firmly set on specializing in high-end motion design and immersive interactivity. That means mastering GSAP, advancing core front-end knowledge, and meticulously hand-crafting the animations that make users say "WOW." True code ownership means building the logic from scratch rather than relying on automated tools, ensuring every micro-interaction feels deliberate, premium, and perfectly timed.
                    Navigating the tech industry as a multilingual international student -- fluent in English, Hindi, and Punjabi -- builds a unique kind of mental fortitude and resilience. That grit is the foundation of every design system and tech stack encountered. It brings a global perspective to user-centered design and a relentless, uncompromising work ethic to the development process.
                    </p>
                </div>
            </div>    
        </section>
    );
};

export default AboutSection;
