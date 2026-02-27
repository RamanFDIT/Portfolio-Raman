import useReveal from "../../hooks/useReveal";

const LINKS = [
    {
        label: "Figma",
        href: "https://www.figma.com/design/YaJNAj0Yxe0YomeBArNYIf/E.D.I.T.H.?node-id=11-52&t=eFugCdo6sSQkvomD-1",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-20C5.8 4 4 5.8 4 8s1.8 4 4 4h4V4H8zm0 8c-2.2 0-4-1.8-4-4s1.8-4 4-4h4v8H8zm8-8h-4v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4zm0 12c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "https://github.com/RamanFDIT/EDITH",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
];

const HeroSection = () => {
    const sectionRef = useReveal({ y: 40, duration: 1, stagger: 0.2 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-24 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
                <div className="flex flex-col gap-6 max-w-3xl">
                    <h1 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight">
                        E.D.I.T.H.
                    </h1>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed max-w-2xl">
                        Event-Driven Intelligent Technical Helper. A voice-controlled AI agent
                        that bridges the gap between powerful LLMs and a developer's actual workflow —
                        unifying Jira, GitHub, and Figma into a single conversational interface.
                    </p>
                    <div data-reveal className="flex flex-wrap items-center gap-4 mt-2">
                        {LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-secondary text-textSecondary font-main text-base lg:text-lg px-6 lg:px-8 py-3 border-none transition-colors ease-out duration-300 hover:bg-hoverColor hover:text-textPrimary no-underline"
                            >
                                {link.icon}
                                {link.label}
                            </a>
                        ))}
                        <span className="font-body text-base opacity-50 italic ml-2">
                            Live Demo Coming Soon
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
