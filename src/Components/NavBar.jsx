import ButtonPrimary from "./ButtonPrimary";
import NavLink from "./NavLinks";
import logo from "../assets/Logo.svg"; 
const NavBar = () => {
    const navlinks = [
        {
            id : "1",
            href : "",
            label : "About"
        },
        {
            id : "2",
            href : "",
            label : "Resume"
        }
    ]
    return ( 
        <nav className = "w-full flex justify-center items-center bg-primary fixed top-0">
            <div className = "flex w-full h-13 max-w-400 justify-between items-center">
                <img className="w-24 h-auto" src={logo} alt = "My Logo"></img>
                <div className="flex align-center gap-16">
                    {navlinks.map((link) => (
                        <NavLink key={link.id} href={link.href} label={link.label} />
                    ))}
                    <select className= "w-24 text-xl hover:underline"> 
                        <option>Projects</option>
                        <option>E.D.I.T.H.</option>
                        <option>Ascend</option>
                        <option>Redesign - City of Vancouver</option>
                    </select>
                </div>
                <ButtonPrimary label = "Contact Me" />
            </div>
        </nav>
    )
}
export default NavBar;