import useReveal from "../../hooks/useReveal";

const PHASES = [
    {
        date: "8 Oct",
        title: "Lo-Fi Prototype",
        description:
            "Started with 10 sketches between us. Half were scrolling layouts, half weren't. We talked it out, figured out how much info the page actually needed, and aligned on direction before touching any pixels.",
    },
    {
        date: "25 Oct",
        title: "Hi-Fi Prototype",
        description:
            "Turned wireframes into a polished Figma prototype. Creating the chart components inside Figma was painful — we didn't think to ask if static images were acceptable. Lesson learned the hard way.",
    },
    {
        date: "5 Nov",
        title: "Functional Code",
        description:
            "Built the coded interface with ECharts for data visualization. Used MoSCoW prioritization to make sure the working charts and data summary shipped first, animations later.",
    },
    {
        date: "19 Nov",
        title: "Integrated Code",
        description:
            "Final integration, bug logging, and polish. The strict scoping from day one gave us buffer time to actually fix issues instead of scrambling to finish incomplete features.",
    },
];

const ProcessSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.15 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-350 w-full flex flex-col items-start lg:items-center gap-10">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold text-left lg:text-center leading-tight">
                    Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl w-full">
                    {PHASES.map((phase) => (
                        <div key={phase.title} data-reveal className="flex flex-col gap-2">
                            <p className="text-sm font-body uppercase tracking-widest opacity-50">
                                {phase.date}
                            </p>
                            <h3 className="text-2xl lg:text-3xl font-semibold">
                                {phase.title}
                            </h3>
                            <p className="text-base lg:text-lg font-body leading-relaxed opacity-80">
                                {phase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
