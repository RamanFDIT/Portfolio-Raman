import useReveal from "../../hooks/useReveal";

const WhySection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-primary px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight shrink-0">
                    The Why
                </h2>
                <div className="flex flex-col gap-6 max-w-2xl">
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        Time management. Staying productive. Adopting new habits. These aren't abstract
                        problems — they're things I personally struggle with. I waste my days off
                        doom-scrolling, and overthinking eats away at the time I do have.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        Traditional to-do apps feel too plain and don't keep you engaged.
                        They tell you what to do but give you zero reason to actually do it.
                        Ascend was built on a simple idea: use the dopamine hit from completing
                        something to keep you hooked on the next task — not the next scroll.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        There's also a journaling component built on the principle that a problem
                        is half solved the moment you write it down. Overthinking is something I
                        deal with constantly — this feature exists because I needed it myself.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhySection;
