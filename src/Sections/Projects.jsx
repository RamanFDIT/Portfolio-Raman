import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import edith from "../assets/EDITH.png";
import ascend from "../assets/Ascend.svg";
import vancouver from "../assets/city-of-vancouver.svg";
import youtube from "../assets/Youtube_Music_icon.svg";

const ProjectCard = lazy(() => import("../Components/ProjectCard"));

export default function Projects(){
    const projectData = [
        {
            id: 1,
            image: edith,  
            title: "E.D.I.T.H.", 
            subTitle: "AI-Driven Workflow Automation Engine",
            skills: "React, Tailwind CSS, Google API",
            linkGit: "GitHub",
            linkDemo: "Demo",
            linkFigma: "Figma",
            linkGitHref: "https://github.com/RamanFDIT/EDITH",
            linkDemoHref: "https://edith-demo.com",
            linkFigmaHref: "https://figma.com/file/edith",
            linkDoc: "Documentation",
            linkDocHref: "https://docs.edith.com",
        },
        {
            id: 2,
            image: ascend,  
            title: "Ascend", 
            subTitle: "Full-Stack Productivity Platform with Real-Time Persistence",
            skills: "React, Tailwind CSS, Collaboration",
            linkGit: "GitHub",
            linkDemo: "Demo",
            linkFigma: "Figma",
            linkGitHref: "https://github.com/kparhar07-star/Ascend-App",
            linkDemoHref: "https://ascend-app-pi.vercel.app",
            linkFigmaHref: "https://www.figma.com/design/1TwaGickOb1fAKC8NDaJSF/FDIT-2120-Design?node-id=156-608&t=LTI3PpiHDsZn5nVm-1",
            linkDoc: "Documentation",
            linkDocHref: "https://docs.ascend.com",
        },
        {
            id: 3,
            image: vancouver,  
            title: "City of Vancouver - Dashboard", 
            subTitle: "Municipal Website Data Visualization Dashboard",
            skills: "HTML, CSS, JavaScript, Collaboration",
            linkGit: "GitHub",
            linkDemo: "Demo",
            linkFigma: "Figma",
            linkGitHref: "https://github.com/RamanFDIT/Project-1-FDIT-2140",
            linkDemoHref: "https://modeshare.netlify.app",
            linkFigmaHref: "https://www.figma.com/design/oU07tW0hsDZrh3UnGIeMut/FDIT-2140-Design?node-id=186-173&t=LTI3PpiHDsZn5nVm-1",
            linkDoc: "Documentation",
            linkDocHref: "https://docs.vancouver-dashboard.com",
        },
        {
            id: 4,
            image: youtube,  
            title: "YouTube Music - Motion Design", 
            subTitle: "High-Performance UI Motion Library using GSAP.",
            skills: "HTML, CSS, JavaScript, GSAP - JS Motion Library",
            linkGit: "GitHub",
            linkDemo: "Demo",
            linkFigma: "Figma",
            linkGitHref: "https://github.com/RamanFDIT/YouTube-Music-Animations",
            linkDemoHref: "https://youtube-music-animations.vercel.app",
            linkFigmaHref: "https://www.figma.com/design/fsWRhf1Ikt532rKZIyjaf6/YT-Music?node-id=0-1&t=LTI3PpiHDsZn5nVm-1",
            linkDoc: "Documentation",
            linkDocHref: "https://docs.youtube-music-motion.com",
        }
    ];
    return(
        <section className="max-w-375 mx-auto flex flex-col gap-10 items-center py-20 px-10" id="projects">
            <h2 className="text-center text-3xl font-semibold text-primary">Projects</h2>
            {projectData.map(project => (
                <Suspense key={project.id} fallback={<div className="text-center py-10">Loading Project...</div>}>
                    <ProjectCard
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
                        linkDoc={project.linkDoc}
                        linkDocHref={project.linkDocHref}
                    />
                </Suspense>
            )
            )}
            <Link className="text-center md:text-right w-full text-accent" to="/projects">View All the Projects</Link>
        </section>
    );
}