import heroImg from "../assets/Heroimg.webp";
import TextType from "../Components/AnimateSlogan";
import useReveal from "../hooks/useReveal";

const HeroSection = () => {
    const sectionRef = useReveal({ y: 30, duration: 1, stagger: 0.2 });

    return (
        <section 
            ref={sectionRef}
            className="section w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center px-4"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <h1 data-reveal className = "text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[200px] 2xl:text-[320px] font-semibold text-center">I 
                <span className = "ml-2 md:ml-5 h-auto bg-secondary text-textSecondary">
                    <TextType 
                        text={["Design", "Develop", "Obsess"]}
                        typingSpeed={200}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="|"
                        deletingSpeed={200}
                        pauseWhenNotVisible
                        variableSpeedEnabled={false}
                        variableSpeedMin={60}
                        variableSpeedMax={120}
                        cursorBlinkDuration={1}
                        />
                </span>    
            </h1>
        </section>
    );
};

export default HeroSection;