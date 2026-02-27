import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";

const Footer = () => {
    return(
        <footer className = "w-full flex justify-center items-center bg-primary fixed bottom-0 z-50">
            <div className = "flex w-full h-13 max-w-400 justify-between items-center px-4 xl:px-0">
                <div className = "flex gap-4 sm:gap-10">
                    <a href="www.linkedin.com/in/ramandeep-singh-studio">
                        <img src = {linkedin} alt="LinkedIn"></img>
                    </a>
                    <a href = "https://github.com/RamanFDIT">
                        <img src = {github} alt="GitHub"></img>
                    </a>
                    <a href = "mailto:studio.ramandeep@gmail.com">
                        <img src = {gmail} alt = "Gmail"></img>
                    </a>
                </div>
                <p className = "font-semibold text-sm sm:text-xl">Made with React</p>
            </div>
        </footer>
    );
};

export default Footer;