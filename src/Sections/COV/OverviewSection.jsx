import useReveal from "../../hooks/useReveal";

const OverviewSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-primary px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight shrink-0">
                    Overview
                </h2>
                <div className="flex flex-col gap-6 max-w-2xl">
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        The City of Vancouver's Healthy City Dashboard had a usability problem.
                        Residents and stakeholders struggled to find and understand the data they needed.
                        Our goal was to redesign the indicator page and push the System Usability Score to 75%.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        We scoped it tight from day one — just the "Mode Share" indicator page,
                        desktop only. No full dashboard overhaul, no scope creep. That discipline
                        is what kept us shipping on time.
                    </p>
                    <div data-reveal className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-4 font-body">
                        <div>
                            <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Role</p>
                            <p className="text-lg">Design Lead & PM</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Team</p>
                            <p className="text-lg">Raman & Vlad</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-widest opacity-60 mb-1">Course</p>
                            <p className="text-lg">FDIT 2110</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
