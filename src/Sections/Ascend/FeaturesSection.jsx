import useReveal from "../../hooks/useReveal";

const FEATURES = [
    {
        title: "Quest System",
        description:
            "Every task becomes a quest with XP rewards. Starred important tasks earn 50 XP, regular ones earn 20 XP. The XP bar fills up, levels unlock, and achievements stack — turning a mundane to-do list into a progression loop.",
    },
    {
        title: "Non-Negotiables",
        description:
            "Built-in daily tasks that can't be skipped — 'Workout for 30 mins,' 'Meditate for 6 mins.' These are the habits that keep you on track even on the days you don't feel like it. The app holds you accountable when you won't.",
    },
    {
        title: "Journaling",
        description:
            "A dedicated space to organize thoughts and write them down. Based on the psychological principle that writing about a problem makes it 50% easier to solve. A quiet corner in an app designed to keep you moving.",
    },
    {
        title: "Streak Tracking",
        description:
            "A visual consistency tracker on the home page. Click into it for a summary calendar showing past journals and completed quests. Seeing an unbroken streak is a powerful motivator — and breaking one hurts just enough to keep you going.",
    },
];

const FeaturesSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.15 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col items-center gap-10">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold text-center leading-tight">
                    Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl w-full">
                    {FEATURES.map((feature) => (
                        <div key={feature.title} data-reveal className="flex flex-col gap-2">
                            <h3 className="text-2xl lg:text-3xl font-semibold">
                                {feature.title}
                            </h3>
                            <p className="text-base lg:text-lg font-body leading-relaxed opacity-80">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
