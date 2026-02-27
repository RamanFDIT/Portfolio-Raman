import { useEffect, useState } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";

const NavLink = ({ label, href }) => {
    const location = useLocation();
    const [isHashActive, setIsHashActive] = useState(false);

    useEffect(() => {
        if (!href.startsWith("#")) return;

        const id = href.slice(1);
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsHashActive(entry.isIntersecting),
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [href, location.pathname]);

    if (href.startsWith("#")) {
        return (
            <a
                className={`text-xl text-textPrimary hover:underline transition-all duration-200 ${isHashActive ? "font-semibold" : ""}`}
                href={href}
            >
                {label}
            </a>
        );
    }

    if (!href) {
        return (
            <a className="text-xl text-textPrimary hover:underline" href={href}>
                {label}
            </a>
        );
    }

    return (
        <RouterNavLink
            className={({ isActive }) =>
                `text-xl text-textPrimary hover:underline transition-all duration-200 ${isActive ? "font-semibold" : ""}`
            }
            to={href}
        >
            {label}
        </RouterNavLink>
    );
};
export default NavLink;