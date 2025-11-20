import Button from "./Button.jsx";
import { useState } from "react";

export default function NavBar() {
    const [isActive, setIsActive] = useState(false);
    return(
        <nav className="flex items-center justify-between px-10 h-15 w-full max-w-655">
            <h2 className="text-primary text-5xl">रमन</h2>
            <ul className="flex justify-between items-center w-130">
                <a href="#"><li className="text-lg">Home</li></a>
                <a href="#"><li className="text-lg">Skills</li></a>
                <a href="#"><li className="text-lg">Resume</li></a>
                <a href="#"><li className="text-lg">Contact</li></a>
            </ul>
            <Button />
        </nav>
    );
};