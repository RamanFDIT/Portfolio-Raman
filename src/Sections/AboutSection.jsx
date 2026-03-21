import { Link } from "react-router-dom";
import ButtonPrimary from "../Components/ButtonPrimary";
import useReveal from "../hooks/useReveal";

const AboutSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return(
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-350 w-full flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10 lg:gap-20">
                <div className="flex flex-col gap-6 max-w-2xl items-center">
                    <h1 data-reveal className="text-6xl md:text-8xl xl:text-[160px] font-semibold leading-tight text-center">
                        Raman
                    </h1>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed text-center">
                        I'm a front-end developer and designer who doesn't just build projects — I live them. 
                        When something clicks for me, it stops being "work" and turns into something I genuinely 
                        can't stop thinking about. That's not a flex, that's just how my brain works.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed text-center">
                        I'm currently in the FDIT program at KPU, figuring out how to take everything 
                        I've been obsessing over since the 9th grade and turn it into a real career. 
                        Fluent in English, Hindi, and Punjabi — and slowly becoming fluent in GSAP.
                    </p>
                    <Link to="/about">
                        <ButtonPrimary label="Know More"/>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
