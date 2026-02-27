import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

const ProjectSpace = ({ label, src, description, link }) => {
    const [open, setOpen] = useState(false);

    const knowMoreButton = link ? (
        <Link to={link}>
            <ButtonPrimary label="Know More" />
        </Link>
    ) : (
        <ButtonPrimary label="Know More" />
    );

    return (
        <div
            className="relative w-100 h-117 bg-primary flex flex-col items-center justify-center gap-3 overflow-hidden cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <img
                className={`w-50 transition-opacity duration-500 ${open ? "opacity-0" : "opacity-100"}`}
                src={src}
                alt={label}
                loading="lazy"
            />
            <h3
                className={`text-secondary text-5xl font-body font-semibold transition-opacity duration-500 ${open ? "opacity-0" : "opacity-100"}`}
            >
                {label}
            </h3>

            {/* Overlay – slides up from bottom on hover OR tap */}
            <div
                className={`absolute inset-0 bg-black/50 transition-transform duration-500 ease-out flex flex-col items-center justify-center gap-4 px-4 sm:px-6 text-center ${
                    open ? "translate-y-0" : "translate-y-full"
                }`}
            >
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-body font-semibold">{label}</h3>
                <p className="text-white text-sm sm:text-base font-body hidden sm:block">{description}</p>
                {knowMoreButton}
            </div>
        </div>
    );
};

export default ProjectSpace;