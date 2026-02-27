import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import NavLink from "./NavLinks";
import logo from "../assets/Logo.svg";

/* ── Reusable custom dropdown ── */
const ProjectDropdown = ({ projects, onSelect, align = "left" }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    /* close on outside click */
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative">
            {/* Trigger */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-1.5 text-xl font-main cursor-pointer bg-transparent border-none hover:opacity-60 transition-opacity duration-200"
            >
                Projects
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown panel */}
            <div
                className={`absolute ${align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"} top-full mt-3 min-w-56 bg-secondary text-primary origin-top transition-all duration-300 ease-out ${
                    open
                        ? "opacity-100 scale-y-100 translate-y-0"
                        : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                }`}
            >
                {projects.filter((p) => p.label !== "Projects").map((p) => (
                    <button
                        key={p.label}
                        disabled={!p.path}
                        onClick={() => {
                            if (p.path) {
                                onSelect(p.path);
                                setOpen(false);
                            }
                        }}
                        className={`w-full text-left px-5 py-3 font-body text-base transition-colors duration-200 border-none bg-transparent ${
                            p.path
                                ? "text-primary hover:bg-primary hover:text-secondary cursor-pointer"
                                : "text-primary/40 cursor-default"
                        }`}
                    >
                        {p.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

/* ── NavBar ── */
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isLanding = location.pathname === "/";

    const projects = [
        { label: "Projects", path: "" },
        { label: "E.D.I.T.H.", path: "/projects/edith" },
        { label: "Ascend", path: "/projects/ascend" },
        { label: "COV Dashboard", path: "/projects/dashboard" },
    ];

    const handleProjectSelect = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    const navlinks = [
        {
            id : "1",
            href : isLanding ? "#about" : "/about",
            label : "About"
        },
        {
            id : "2",
            href : "/resume",
            label : "Resume"
        }
    ];

    return (
        <nav className="w-full flex justify-center items-center bg-primary fixed top-0 z-50">
            <div className="flex w-full h-13 max-w-400 justify-between items-center px-4 xl:px-0">
                <Link to="/">
                    <img className="w-16 md:w-24 h-auto" src={logo} alt="My Logo" />
                </Link>

                {/* Hamburger button – visible on mobile only */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-secondary transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-secondary transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-secondary transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-16">
                    {navlinks.map((link) => (
                        <NavLink key={link.id} href={link.href} label={link.label} />
                    ))}
                    <ProjectDropdown projects={projects} onSelect={handleProjectSelect} />
                </div>
                <div className="hidden md:block">
                    <ButtonPrimary label="Contact Me" />
                </div>
            </div>

            {/* Mobile menu dropdown */}
            <div className={`md:hidden absolute top-13 left-0 w-full bg-primary shadow-md flex flex-col items-center gap-4 py-6 transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                {navlinks.map((link) => (
                    <NavLink key={link.id} href={link.href} label={link.label} />
                ))}
                <ProjectDropdown projects={projects} onSelect={handleProjectSelect} align="center" />
                <ButtonPrimary label="Contact Me" />
            </div>
        </nav>
    );
};

export default NavBar;