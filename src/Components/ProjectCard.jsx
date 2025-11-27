export default function ProjectCard({image, title, subTitle, skills, linkGit, linkDemo, linkFigma, linkGitHref, linkDemoHref, linkFigmaHref, linkDoc, linkDocHref}) {

    return(
        <div className="flex w-312.5 max-w-312.5 px-5 justify-between items-center rounded-4xl gap-10 border-2 border-card-border h-94 transform hover:scale-105 transition-transform duration-300">
            <img className="w-76 max-w-76 h-auto " src={image}></img>
            <div className= "flex flex-col justify-between h-full w-178 py-5 items-start">
                <div></div>
                <h3 className="text-3xl font-medium">{title}</h3>
                <div>
                    <h4 className="text-2xl">{subTitle}</h4>
                    <p className="text-lg">{skills}</p>
                </div>
                <div className="flex gap-5">
                    <a target = "_blank" className="text-link transform hover:scale-105 transition-transform duration-300" href={linkGitHref}>{linkGit}</a>
                    <a target = "_blank" className="text-link transform hover:scale-105 transition-transform duration-300" href={linkDemoHref}>{linkDemo}</a>
                    <a target = "_blank" className="text-link transform hover:scale-105 transition-transform duration-300" href={linkFigmaHref}>{linkFigma}</a>
                    <a target = "_blank" className="text-link transform hover:scale-105 transition-transform duration-300" href={linkDocHref}>{linkDoc}</a>
                </div>
            </div>
        </div>
    );
}