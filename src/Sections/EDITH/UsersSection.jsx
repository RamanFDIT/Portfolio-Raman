import useReveal from "../../hooks/useReveal";

const UsersSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-primary px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-350 w-full flex flex-col lg:flex-row-reverse items-start lg:items-center justify-between gap-10 lg:gap-20">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight shrink-0 text-left lg:text-right">
                    The Users
                </h2>
                <div className="flex flex-col gap-8 max-w-2xl">
                    <div data-reveal className="flex flex-col gap-2">
                        <h3 className="text-xl lg:text-2xl font-semibold">Morgan, 27 — Freelance Developer</h3>
                        <p className="text-lg md:text-xl font-body leading-relaxed">
                            Runs a one-person agency serving 3-4 clients. She's the PM, developer, and QA
                            tester all at once. Switching between Client A's Jira, Client B's GitHub Issues,
                            and Client C's Slack eats 10-15% of her billable week. She needs a headless
                            interface that lets her manage projects without leaving her code.
                        </p>
                    </div>
                    <div data-reveal className="flex flex-col gap-2">
                        <h3 className="text-xl lg:text-2xl font-semibold">Vlad, 22 — Student Developer</h3>
                        <p className="text-lg md:text-xl font-body leading-relaxed">
                            Thrives in hackathon environments but struggles with "Enterprise Agile."
                            Gets lower grades not because his code is bad, but because he forgets to update
                            Jira tickets. Views PM tools as bloatware that gets in the way of actual work.
                            He needs something that makes project management invisible.
                        </p>
                    </div>
                    <div data-reveal className="flex flex-col gap-2">
                        <h3 className="text-xl lg:text-2xl font-semibold">The Core Motivation</h3>
                        <p className="text-lg md:text-xl font-body leading-relaxed">
                            Preservation of flow state. Developers suffer high context-switching costs
                            when toggling between IDEs and project management GUIs. EDITH abstracts
                            multi-click workflows into single-sentence voice commands — maintaining deep
                            focus while keeping everything in sync.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsersSection;
