import useReveal from "../../hooks/useReveal";

const LAYERS = [
    {
        title: "The Brain",
        subtitle: "Cognitive Layer",
        description:
            "Powered by Google Gemini 3 Flash API — chosen over Pro specifically for its low latency and high tokens-per-second, critical for real-time voice interaction. The LLM reasons about intent and outputs structured function calls instead of unstructured text.",
    },
    {
        title: "The Limbs",
        subtitle: "Tooling Layer",
        description:
            "Primary Arms (Jira & GitHub) handle read/write operations via OAuth 2.0. Secondary Arms (Google Calendar, Gmail, Figma) provide context awareness. The Gemini API's native tools parameter enables structured JSON output for precise tool invocation.",
    },
    {
        title: "The Nervous System",
        subtitle: "Orchestration Layer",
        description:
            "A local Node.js/Express server that lives on the developer's machine. File system access is sandboxed to a specific project directory — the AI can never touch system files. API keys stay in a local .env, never exposed to the cloud LLM context.",
    },
];

const ArchitectureSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.15 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col items-center gap-10">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold text-center leading-tight">
                    Architecture
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl w-full">
                    {LAYERS.map((layer) => (
                        <div key={layer.title} data-reveal className="flex flex-col gap-3">
                            <p className="text-sm font-body uppercase tracking-widest opacity-50">
                                {layer.subtitle}
                            </p>
                            <h3 className="text-2xl lg:text-3xl font-semibold">
                                {layer.title}
                            </h3>
                            <p className="text-base lg:text-lg font-body leading-relaxed opacity-80">
                                {layer.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
