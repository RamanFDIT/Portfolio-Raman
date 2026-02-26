import ProjectDisplay from "../Components/ProjectsDisplay";

const ProjectsSection = () => {
    return(
        <section className="section w-full text-primary h-screen flex flex-col items-center justify-center bg-secondary">
            <h2 className="text-[200px] font-semibold ">Projects</h2>
            <ProjectDisplay />
        </section>
    );
};

export default ProjectsSection;