import useReveal from "../../hooks/useReveal";

const WhySection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-primary px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight shrink-0">
                    The Why
                </h2>
                <div className="flex flex-col gap-6 max-w-2xl">
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        Ever since the 9th grade, I've had this dream stuck in my head — building an 
                        AI agent as impactful as Tony Stark's JARVIS. Sounds ridiculous, right? Maybe. 
                        But that exact kind of "too ambitious" thinking is what gets me out of bed every morning.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        That obsession turned into E.D.I.T.H., my capstone project — a fully functional, 
                        AI-integrated application that I took from a raw idea to reality. Not because 
                        someone assigned it. Because I couldn't not build it.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        When I understand why a project matters, it becomes personal. I think about it 
                        in the shower, while eating, before bed. That's the energy I bring to everything 
                        I build. If it doesn't consume me a little, I'm probably not doing it right.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhySection;
