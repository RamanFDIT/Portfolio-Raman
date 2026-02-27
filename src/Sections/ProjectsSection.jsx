import ProjectDisplay from "../Components/ProjectsDisplay";
import useReveal from "../hooks/useReveal";

const ProjectsSection = () => {
    const sectionRef = useReveal({ y: 60, duration: 0.9, stagger: 0.2 });

    return(
        <section ref={sectionRef} className="section w-full text-primary h-auto min-h-screen flex flex-col items-center justify-center bg-secondary px-4 py-20 lg:py-0 lg:h-screen">
            <h2 data-reveal className="text-6xl md:text-8xl lg:text-9xl xl:text-[200px] font-semibold mb-8 lg:mb-0">Projects</h2>
            <div data-reveal>
                <ProjectDisplay />
            </div>
        </section>
    );
};

export default ProjectsSection;