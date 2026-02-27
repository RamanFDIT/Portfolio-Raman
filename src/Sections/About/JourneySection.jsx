import useReveal from "../../hooks/useReveal";

const JourneySection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.15 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col items-center gap-10">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold text-center leading-tight">
                    The Journey
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-5xl w-full">
                    <div className="flex flex-col gap-6 flex-1">
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            I didn't take a straight path here. I'm an international student who moved 
                            across the world and started building a life from scratch. For a while, that 
                            meant working as a framing carpenter — real physical work that taught me grit, 
                            problem-solving under pressure, and what it means to actually show up every single day.
                        </p>
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            On the side, I was always coding. Always designing. Always sketching out ideas 
                            that felt way too big for where I was at. Eventually I enrolled in the FDIT 
                            program at KPU, and that's where things started to click — the design thinking, 
                            the front-end architecture, the obsession with craft.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 flex-1">
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            I went from wanting to do everything (full-stack, backend, the works) to 
                            realizing what I actually love: the front-end. Not just making things work, 
                            but making them feel alive. The animations, the micro-interactions, that moment 
                            when a user's jaw drops a little — that's what I'm chasing.
                        </p>
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            The carpenter in me still shows up in how I code. Measure twice, cut once. 
                            Build the foundation right. And never hand off something you wouldn't put 
                            your name on.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
