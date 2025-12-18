import Button from "./Button.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    {id: 1, name: "Home", href: "#hero" },
    {id: 2, name: "Skills", href: "#skills" },
    {id: 3, name: "Projects", href: "#projects" },
    {id: 4, name: "Contact", href: "#contact" },
];

export default function NavBar() {
    const [activeId, setActiveId] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (id) => {
        setActiveId(id);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        const link = navLinks.find((link) => link.href === `#${id}`);
                        if (link) {
                            setActiveId(link.id);
                        }
                    }
                });
            },
            { rootMargin: "-45% 0px -45% 0px" }
        );

        const timeoutId = setTimeout(() => {
            navLinks.forEach((link) => {
                const section = document.querySelector(link.href);
                if (section) {
                    observer.observe(section);
                }
            });
        }, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, []);

    return(
        <nav className="flex mx-auto items-center justify-between px-5 md:px-10 h-15 w-full max-w-375 fixed top-0 left-0 right-0 z-50 bg-bg">
            <Link to="/"><h2 className="text-primary text-3xl md:text-5xl">रमन</h2></Link>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-between items-center w-130">
                {navLinks.map(link => (
                    <a className= {`hover:text-primary ${activeId === link.id ? "text-primary" : ""}`} onClick = {() => handleClick(link.id)} key={link.id} href={link.href}>
                        <li className="text-lg">{link.name}</li>
                    </a>
                ))}
            </ul>
            <div className="hidden md:block">
                <Link to="/projects"><Button 
                    text="View All Projects"
                /></Link>    
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-primary focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-15 left-0 w-full bg-bg border-b border-card-border flex flex-col items-center py-5 gap-5 md:hidden shadow-lg">
                    <ul className="flex flex-col items-center gap-5 w-full">
                        {navLinks.map(link => (
                            <a className= {`hover:text-primary ${activeId === link.id ? "text-primary" : ""}`} onClick = {() => handleClick(link.id)} key={link.id} href={link.href}>
                                <li className="text-xl">{link.name}</li>
                            </a>
                        ))}
                    </ul>
                    <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                        <Button text="View All Projects" />
                    </Link>
                </div>
            )}
        </nav>
    );
};