import useReveal from "../../hooks/useReveal";

const UserSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-primary px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-20">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight shrink-0 text-right">
                    The User
                </h2>
                <div className="flex flex-col gap-6 max-w-2xl">
                    <div data-reveal className="flex flex-col sm:flex-row gap-6 sm:gap-12 font-body mb-2">
                        <div>
                            <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Name</p>
                            <p className="text-lg">Steve, 22</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Role</p>
                            <p className="text-lg">Web Dev Student</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Works</p>
                            <p className="text-lg">Part-Time Retail</p>
                        </div>
                    </div>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        Steve is juggling coding assignments, group projects, and long shifts at work.
                        He often forgets deadlines, skips workouts, and overthinks — which adds to his
                        stress. He wants to regain control over his schedule and habits, but traditional
                        to-do apps feel too plain and don't keep him engaged.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        He downloads Ascend after missing a project deadline. His morning opens to a
                        quest board: "Finish JavaScript Assignment (50 XP)," "Prepare work shift notes
                        (20 XP)," "Quick workout (30 XP)." As he checks them off throughout the day,
                        the XP bar fills, and he actually feels relieved and productive — not drained.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        The target audience is people like us — people who want to take control of their
                        lives, become more disciplined, and need more than a blank checkbox to stay motivated.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UserSection;
