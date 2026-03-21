import useReveal from "../../hooks/useReveal";

const LINKS = [
    {
        label: "Live Demo",
        href: "https://modeshare.netlify.app",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h-1a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-1" />
            </svg>
        ),
    },
    {
        label: "Figma",
        href: "https://www.figma.com/proto/TsrEhXUx3LBDNcIsuPsRks/HIFI-Prototype?node-id=0-1&t=eFugCdo6sSQkvomD-1",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "https://github.com/RamanFDIT/Project-1-FDIT-2140",
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
            <div className="max-w-350 w-full flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10 lg:gap-20">
                <div className="flex flex-col gap-6 max-w-3xl">
                    <h1 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight">
                        Dashboard
                    </h1>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed max-w-2xl">
                        A redesign of the City of Vancouver's Healthy City Dashboard indicator page.
                        Focused on the "Mode Share" indicator to make civic data actually usable for
                        Vancouver residents and community stakeholders.
                    </p>
                    <div data-reveal className="flex flex-wrap gap-4 mt-2">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
