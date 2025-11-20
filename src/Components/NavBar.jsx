import Button from "./Button.jsx";
import { useState } from "react";

export default function NavBar() {
    const [activeId, setActiveId] = useState(1);
    const handleClick = (id) => {
        setActiveId(id);
    };
    const navLinks = [
        {id: 1, name: "Home", href: "#hero" },
        {id: 2, name: "Skills", href: "#" },
        {id: 3, name: "Resume", href: "#" },
        {id: 4, name: "Contact", href: "#" },
    ];
    return(
        <nav className="flex mx-auto items-center justify-between px-10 h-15 w-full max-w-7xl fixed top-0 left-0 right-0 z-50 bg-bg">
            <h2 className="text-primary text-5xl">रमन</h2>
            <ul className="flex justify-between items-center w-130">
                {navLinks.map(link => (
                    <a className= {`hover:text-primary ${activeId === link.id ? "text-primary" : ""}`} onClick = {() => handleClick(link.id)} key={link.id} href={link.href}>
                        <li className="text-lg">{link.name}</li>
                    </a>
                ))}
            </ul>
            <Button />
        </nav>
    );
};