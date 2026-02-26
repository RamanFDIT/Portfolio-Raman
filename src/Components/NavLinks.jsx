const NavLink = ({ label, href }) => {
    return (
        <a className="text-xl text-textPrimary hover:underline" href={href}>
            {label}
        </a>
    );
};
export default NavLink;