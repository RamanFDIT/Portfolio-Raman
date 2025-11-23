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

    const handleClick = (id) => {
        setActiveId(id);
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
        <nav className="flex mx-auto items-center justify-between px-10 h-15 w-full max-w-375 fixed top-0 left-0 right-0 z-50 bg-bg">
            <Link to="/"><h2 className="text-primary text-5xl">रमन</h2></Link>
            <ul className="flex justify-between items-center w-130">
                {navLinks.map(link => (
                    <a className= {`hover:text-primary ${activeId === link.id ? "text-primary" : ""}`} onClick = {() => handleClick(link.id)} key={link.id} href={link.href}>
                        <li className="text-lg">{link.name}</li>
                    </a>
                ))}
            </ul>
            <Link to="/projects"><Button 
                text="View All Projects"
            /></Link>    
        </nav>
    );
};