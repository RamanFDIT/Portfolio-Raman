import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";

const Footer = () => {
    return(
        <footer className = "w-full flex justify-center items-center bg-primary fixed bottom-0 z-50">
            <div className = "flex w-full h-13 max-w-400 justify-between items-center px-4 xl:px-0">
                <nav aria-label="Social links" className = "flex gap-4 sm:gap-10">
                    <a href="https://www.linkedin.com/in/ramandeep-singh-studio" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <img src = {linkedin} alt="LinkedIn" className="w-5 sm:w-auto" />
                    </a>
                    <a href="https://github.com/RamanFDIT" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                        <img src = {github} alt="GitHub" className="w-5 sm:w-auto" />
                    </a>
                    <a href="mailto:studio.ramandeep@gmail.com" aria-label="Send email">
                        <img src = {gmail} alt="Gmail" className="w-5 sm:w-auto" />
                    </a>
                </nav>
                <p className = "font-semibold text-sm sm:text-xl">Made with React</p>
            </div>
        </footer>
    );
};

export default Footer;