import useReveal from "../../hooks/useReveal";

const BeyondCodeSection = () => {
    const sectionRef = useReveal({ y: 40, duration: 0.9, stagger: 0.15 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col items-center gap-10">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold text-center leading-tight">
                    Beyond Code
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-5xl w-full">
                    <div className="flex flex-col gap-6 flex-1">
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            The obsessive thing isn't limited to code. I analyze Eminem tracks like 
                            they're algorithms — the rhythm patterns, the internal rhyme schemes, how 
                            he stacks syllables to create flow. Same brain, different medium.
                        </p>
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            Chess taught me to think five moves ahead. The Rubik's cube taught me that 
                            every complex problem has a systematic solution if you're patient enough to 
                            learn the patterns. Volleyball taught me how to function as part of a team 
                            when the stakes are high and the pressure is real.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 flex-1">
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            Moving to a new country, learning to navigate a completely different culture, 
                            working construction while studying tech — that builds a kind of resilience 
                            that doesn't show up on a resume but shows up in everything I do.
                        </p>
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            I prefer hybrid work because I need both the focus of solitude and the 
                            energy of collaboration. Give me a problem that seems impossible, a team 
                            that actually cares, and the freedom to go deep — and I'll build something 
                            worth talking about.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondCodeSection;
