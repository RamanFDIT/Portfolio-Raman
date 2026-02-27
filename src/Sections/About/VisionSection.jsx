import useReveal from "../../hooks/useReveal";

const VisionSection = () => {
    const sectionRef = useReveal({ y: 50, duration: 0.9, stagger: 0.18 });

    return (
        <section
            ref={sectionRef}
            className="section w-full min-h-screen flex flex-col items-center justify-center bg-secondary text-primary px-4 py-20 lg:py-0 lg:h-screen"
        >
            <div className="max-w-400 w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-20">
                <h2 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight shrink-0 text-left lg:text-right">
                    Where I'm<br />Headed
                </h2>
                <div className="flex flex-col gap-6 max-w-2xl">
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        Over the next two years, the plan is pretty clear: go from being a 
                        "jack of all trades" to a specialist in motion design and creative front-end 
                        development. I want to be the person teams call when they need something 
                        that makes people say "how did they do that?"
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        That means going deep into GSAP, creative coding, and immersive 
                        interactivity. Not surface-level tutorials — actually understanding the 
                        math, the timing functions, the architecture behind complex animations. 
                        Building one "WOW" project every quarter until the portfolio speaks for itself.
                    </p>
                    <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                        I also want to gradually reduce my reliance on AI tools for writing logic. 
                        They're great for speed, but true code ownership means I need to be able to 
                        build the complex stuff from scratch. Every line should be intentional. 
                        Every animation, hand-crafted.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
