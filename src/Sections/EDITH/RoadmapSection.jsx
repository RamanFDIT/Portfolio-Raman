import useReveal from "../../hooks/useReveal";

const PHASES = [
    {
        date: "Jan 20 - Feb 5",
        title: "Refinement & UI",
        description:
            "Backend hardening with error handling and secure .env key storage. Built the \"Tactical Interface\" — an Electron/React dashboard replacing the initial HTML chat. Wireframed the Iron Man-style HUD for the desktop app.",
    },
    {
        date: "Feb 6 - Mar 3",
        title: "Advanced Features",
        description:
            "Implemented wake-word detection (\"EDITH\") and Speech-to-Text. Expanded local system control to handle complex file queries like PDF summarization — all within a sandboxed directory. Designed UX research tasks for Voice vs. Text speed testing.",
    },
    {
        date: "Mar 3 - Mar 31",
        title: "Integration & Testing",
        description:
            "Full integration testing to ensure voice commands accurately trigger Jira/GitHub tools without hallucination. Two rounds of usability testing — first on the voice-first workflow, then stress-testing local file manipulation safeguards.",
    },
    {
        date: "Apr 1 - Apr 14",
        title: "Final Polish",
        description:
            "Documentation and packaging into a one-click installer. Recorded a live demo showcasing complex multi-step agent actions — voice commands orchestrating Jira tickets, GitHub PRs, and local file operations in a single flow.",
    },
];

const RoadmapSection = () => {
    const sectionRef = useReveal({ y: 40, duration: 0.9, stagger: 0.15 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col items-center gap-10">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold text-left lg:text-center leading-tight">
                    Roadmap
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

export default RoadmapSection;
