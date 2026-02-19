import "../../styles/nav.css"
import NavLinks from "./NavLinks"

const navItems = [
  { label: "Movies", href: "#" },
  { label: "TV Shows", href: "#" },
  { label: "People", href: "#" },
  { label: "Awards", href: "#" },
  { label: "More", href: "#" }
];

export default function Nav() { 
    return(
        <div className="nav-wrapper">
            <img 
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                alt="Logo" 
                className="logo"
            />
            <NavLinks navItems={navItems}/>
        </div>
    )
}