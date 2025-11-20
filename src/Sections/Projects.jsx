import ProjectCard from "../Components/ProjectCard";

export default function Projects(){
    const projectData = [
        {
            id: 1,
            image: "./public/EDITH.png",  
            title: "E.D.I.T.H.", 
            subTitle: "A.I. Project Assistant",
            skills: "React, Tailwind CSS, Google API",
            linkGit: "GitHub",
            linkDemo: "Demo",
            linkFigma: "Figma",
            linkGitHref: "https://github.com/username/edith",
            linkDemoHref: "https://edith-demo.com",
            linkFigmaHref: "https://figma.com/file/edith",
        },
        {
            id: 2,
            image: "./public/Ascend.svg",  
            title: "Ascend", 
            subTitle: "Self Improvement App",
            skills: "React, Tailwind CSS, Collaboration",
            linkGit: "GitHub",
            linkDemo: "Demo",
            linkFigma: "Figma",
            linkGitHref: "https://github.com/username/ascend",
            linkDemoHref: "https://ascend-demo.com",
            linkFigmaHref: "https://figma.com/file/ascend",
        },
        {
            id: 3,
            image: "./public/city-of-vancouver.svg",  
            title: "City of Vancouver - Dashboard", 
            subTitle: "Municipal Website",
            skills: "React, Tailwind CSS, Collaboration",
            linkGit: "GitHub",
            linkDemo: "Demo",
            linkFigma: "Figma",
            linkGitHref: "https://github.com/username/city-of-vancouver",
            linkDemoHref: "https://city-of-vancouver-demo.com",
            linkFigmaHref: "https://figma.com/file/city-of-vancouver",
        },
        {
            id: 4,
            image: "./public/Youtube_Music_icon.svg",  
            title: "YouTube Music - Motion Design", 
            subTitle: "Music Streaming Motion Design",
            skills: "HTML, CSS, JavaScript, GSAP - JS Motion Library",
            linkGit: "GitHub",
            linkDemo: "Demo",
            linkFigma: "Figma",
            linkGitHref: "https://github.com/username/youtube-music-motion-design",
            linkDemoHref: "https://youtube-music-motion-design-demo.com",
            linkFigmaHref: "https://figma.com/file/youtube-music-motion-design",
        }
    ];
    return(
        <section className="max-w-7xl mx-auto flex flex-col gap-10 items-center py-20" id="projects">
            <h2 className="text-center text-3xl font-semibold text-primary">Projects</h2>
            {projectData.map(project => (
                <ProjectCard
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    subTitle={project.subTitle}
                    skills={project.skills}
                    linkGit={project.linkGit}
                    linkDemo={project.linkDemo}
                    linkFigma={project.linkFigma}
                    linkGitHref={project.linkGitHref}
                    linkDemoHref={project.linkDemoHref}
                    linkFigmaHref={project.linkFigmaHref}
                />
            )
            )}
            <a className="text-right w-full text-accent" href="/projects">View All the Projects</a>
        </section>
    );
}