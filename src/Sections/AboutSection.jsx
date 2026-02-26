import ButtonPrimary from "../Components/ButtonPrimary";

const AboutSection = () => {
    return(
        <section className="section w-full max-w-400 h-screen flex items-center justify-center">
            <div className="flex flex-col">
                <div className="flex justify-center w-310">
                    <p className="text-xl font-body w-78">Obsession is a superpower. Whether analyzing the rapid-fire rhythm of an Eminem track, strategizing the next move on a chessboard, solving a Rubik’s cube, or architecting a complex React component, the approach remains identical: diving all the way in and figuring out exactly how the underlying logic works.</p>
                    <h2 className="text-[180px] font-semibold ">Raman</h2>
                    <p className="text-xl font-body w-90 text-right h-54">Currently completing the FDIT program at KPU, the daily drive is about turning ambitious, sci-fi concepts into tangible digital realities. Taking a project like the E.D.I.T.H. capstone from a raw idea to a fully functional, AI-integrated application requires a deep-dive focus. It is not just about writing code; it is about living the project until the architecture is flawless.</p>
                </div>   
                <div className = "flex flex-col items-center">
                    <ButtonPrimary label = "Know More"/>
                    <p className="text-xl font-body w-310 text-center">The digital landscape moves fast, and the target is firmly set on specializing in high-end motion design and immersive interactivity. That means mastering GSAP, advancing core front-end knowledge, and meticulously hand-crafting the animations that make users say "WOW." True code ownership means building the logic from scratch rather than relying on automated tools, ensuring every micro-interaction feels deliberate, premium, and perfectly timed.
                    Navigating the tech industry as a multilingual international student—fluent in English, Hindi, and Punjabi—builds a unique kind of mental fortitude and resilience. That grit is the foundation of every design system and tech stack encountered. It brings a global perspective to user-centered design and a relentless, uncompromising work ethic to the development process.
                    </p>
                </div>
            </div>    
        </section>
    );
};

export default AboutSection;