import useReveal from "../../hooks/useReveal";

const ProblemSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-primary px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight shrink-0">
                    The Problem
                </h2>
                <div className="flex flex-col gap-6 max-w-2xl">
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        Current mainstream AI tools are powerful — but they're stuck in a browser tab.
                        They can suggest code but can't commit it. They can draft emails but can't send them.
                        They're disconnected from the developer's actual work environment.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        The industry is shifting from "Generative Chatbots" to "Agentic Systems" — AI that
                        doesn't just talk, but acts. An effective agent needs a Brain (LLM reasoning),
                        Limbs (tools and APIs), and a Nervous System (orchestration layer). Current solutions
                        like ChatGPT and Gemini Advanced are broad but shallow — they lack deep, state-aware
                        integration into a developer's specific workflow.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        EDITH addresses this gap. A specialized developer companion that unifies the
                        fragmented development stack — Jira, GitHub, Figma — into a single voice-controlled
                        interface. Not a general-purpose assistant. A workflow orchestrator.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
