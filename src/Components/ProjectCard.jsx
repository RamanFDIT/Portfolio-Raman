export default function ProjectCard({image, title, subTitle, skills, linkGit, linkDemo, linkFigma, linkGitHref, linkDemoHref, linkFigmaHref, linkDoc, linkDocHref}) {

    return(
        <div className="flex flex-col md:flex-row w-full max-w-312.5 px-5 justify-between items-center rounded-4xl gap-10 border-2 border-card-border h-auto md:h-94 py-10 md:py-0 transform hover:scale-105 transition-transform duration-300">
            <img className="w-full md:w-76 max-w-76 h-auto " src={image} loading="lazy" alt={title} />
            <div className= "flex flex-col justify-between h-full w-full md:w-178 py-5 items-start gap-5 md:gap-0">
                <div className="hidden md:block"></div>
                <h3 className="text-2xl md:text-3xl font-medium">{title}</h3>
                <div>
                    <h4 className="text-xl md:text-2xl">{subTitle}</h4>
                    <p className="text-md md:text-lg mt-2">{skills}</p>
                </div>
                <div className="flex flex-wrap gap-5 md:gap-10">
                    <a target = "_blank" className="text-link transform hover:scale-105 transition-transform duration-300" href={linkGitHref}>{linkGit}</a>
                    <a target = "_blank" className="text-link transform hover:scale-105 transition-transform duration-300" href={linkDemoHref}>{linkDemo}</a>
                    <a target = "_blank" className="text-link transform hover:scale-105 transition-transform duration-300" href={linkFigmaHref}>{linkFigma}</a>
                    <a target = "_blank" className="text-link transform hover:scale-105 transition-transform duration-300" href={linkDocHref}>{linkDoc}</a>
                </div>
            </div>
        </div>
    );
}