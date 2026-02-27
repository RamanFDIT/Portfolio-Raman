import useReveal from "../../hooks/useReveal";

const OutcomeSection = () => {
    const sectionRef = useReveal({ y: 40, duration: 0.9, stagger: 0.15 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col items-center gap-10">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold text-left lg:text-center leading-tight">
                    Outcome
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-5xl w-full">
                    <div className="flex flex-col gap-6 flex-1">
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            The project shipped on time — every milestone hit, from the Lo-fi prototype on
                            October 8th to the Integrated Code on November 19th. We delivered an almost
                            design-accurate coded website that addressed the informational needs of Vancouver
                            residents, targeting a System Usability Score increase to 75%.
                        </p>
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            Because we prevented scope creep early, we had buffer time to actually fix bugs
                            and polish the code before the deadline. That's not luck — that's what happens
                            when you scope honestly and manage tasks in Jira instead of hoping for the best.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 flex-1">
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            The biggest takeaway? Communication timing matters. We spent significant time
                            prototyping complex charts only to realize later we could have used static images.
                            Future projects should have a "sync" meeting before heavy sketching begins —
                            confirm technical constraints early, not after hours of wasted effort.
                        </p>
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            This project taught me that a PM must sometimes prioritize functionality over
                            visual perfection. When ECharts proved hard to style, the compromise I facilitated
                            kept the project on track. Strict scoping, honest trade-offs, and building
                            something worth shipping — that's the formula.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutcomeSection;
