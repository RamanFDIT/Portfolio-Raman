import heroImg from "../assets/Heroimg.png";
import TextType from "../Components/AnimateSlogan";
const HeroSection = () => {
    return (
        <section 
            className="section w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <h1 className = "text-[320px] font-semibold">I 
                <span className = "ml-5 h-auto bg-secondary text-textSecondary">
                    <TextType 
                        text={["Design", "Develop", "Obsess"]}
                        typingSpeed={200}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="|"
                        deletingSpeed={200}
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