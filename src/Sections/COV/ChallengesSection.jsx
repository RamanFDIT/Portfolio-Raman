import useReveal from "../../hooks/useReveal";

const ChallengesSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-primary px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-350 w-full flex flex-col lg:flex-row-reverse items-start lg:items-center justify-between gap-10 lg:gap-20">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight shrink-0 text-left lg:text-right">
                    Challenges
                </h2>
                <div className="flex flex-col gap-8 max-w-2xl">
                    <div data-reveal className="flex flex-col gap-2">
                        <h3 className="text-xl lg:text-2xl font-semibold">Team Alignment</h3>
                        <p className="text-lg md:text-xl font-body leading-relaxed">
                            Two weeks in, we realized our 10 sketches were pulling in opposite directions —
                            half scrolling, half static. Instead of forcing it, we had an honest conversation
                            about how much information the page actually needed. We went with Vlad's scrolling
                            approach. Sometimes the best PM decision is knowing when to let go of your own idea.
                        </p>
                    </div>
                    <div data-reveal className="flex flex-col gap-2">
                        <h3 className="text-xl lg:text-2xl font-semibold">Chart Readability</h3>
                        <p className="text-lg md:text-xl font-body leading-relaxed">
                            The ECharts library's built-in table was hard to read, and toolbar icons lacked active
                            states. I built an overlay table that was more readable and design-accurate — but it
                            broke visual consistency with other charts. A trade-off I had to accept. Functionality
                            over pixel-perfection when deadlines are real.
                        </p>
                    </div>
                    <div data-reveal className="flex flex-col gap-2">
                        <h3 className="text-xl lg:text-2xl font-semibold">Design-to-Code Gap</h3>
                        <p className="text-lg md:text-xl font-body leading-relaxed">
                            Implementing the exact design components within the code timeframe was a real risk.
                            I facilitated a compromise — adapting the design to fit technical constraints while
                            staying "design-faithful." No broken features shipped just for the sake of visuals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChallengesSection;
