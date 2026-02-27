import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

const ProjectSpace = ({ label, src, description, link }) => {
    const knowMoreButton = link ? (
        <Link to={link}>
            <ButtonPrimary label="Know More" />
        </Link>
    ) : (
        <ButtonPrimary label="Know More" />
    );

    return (
        <div className="relative w-full sm:w-72 md:w-80 lg:w-100 h-80 sm:h-96 lg:h-117 bg-primary flex flex-col items-center justify-center gap-3 overflow-hidden group cursor-pointer">
            <img className="w-32 sm:w-40 lg:w-50 transition-opacity duration-500 group-hover:opacity-0" src={src} alt={label} />
            <h3 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-body font-semibold transition-opacity duration-500 group-hover:opacity-0">{label}</h3>

            {/* Hover overlay – slides up from bottom */}
            <div className="absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center gap-4 px-4 sm:px-6 text-center">
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-body font-semibold">{label}</h3>
                <p className="text-white text-sm sm:text-base font-body">{description}</p>
                {knowMoreButton}
            </div>
        </div>
    );
};

export default ProjectSpace;