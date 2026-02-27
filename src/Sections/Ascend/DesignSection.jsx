import useReveal from "../../hooks/useReveal";

const DesignSection = () => {
    const sectionRef = useReveal({ y: 40, duration: 0.9, stagger: 0.15 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col items-center gap-10">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold text-left lg:text-center leading-tight">
                    Design
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-5xl w-full">
                    <div className="flex flex-col gap-6 flex-1">
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            The interface is structured around four core screens: Home (streak overview
                            and daily quests), Quest Master (add and prioritize new tasks), Journal
                            (write and reflect), and Achievements (unlockable milestones tied to XP).
                        </p>
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            The home page leads with a streak tracker — a row of days that shows
                            consistency at a glance. Below it, today's quests are listed with clear
                            completion states. Tapping the streak area navigates to a summary calendar
                            with past journals and completed tasks for deeper reflection.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 flex-1">
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            The Quest Master page is where users add their own tasks and set importance
                            levels. Below the input, a recommendations section suggests built-in
                            wellness activities — meditation, breathing exercises, quick calm sessions —
                            to round out the day beyond just productivity.
                        </p>
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            Every design decision was made to reduce friction. The flow is linear:
                            see your quests, complete them, gain XP, track progress, journal, set new
                            goals. No buried settings, no overwhelming dashboards. Just the loop that
                            keeps you moving forward.
                        </p>
                    </div>
                </div>
                <div data-reveal className="flex flex-col sm:flex-row gap-6 sm:gap-12 font-body mt-4">
                    <div>
                        <p className="text-sm uppercase tracking-widest opacity-50 mb-1">Team</p>
                        <p className="text-lg">Raman & Karan</p>
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-widest opacity-50 mb-1">Course</p>
                        <p className="text-lg">FDIT 2120</p>
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-widest opacity-50 mb-1">Professor</p>
                        <p className="text-lg">Matt Anderson</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignSection;
