import { Link } from "react-router-dom";
import "../../styles/header/navLinks.css";
import { NavContext } from "../Context/NavContext";
import { useContext } from "react";

export default function NavLinks() {
  const navItems = useContext(NavContext);

  return (
    <div className="links-container">
      <ul className="list-ul">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link className="list-item" to={item.href} key={item.label}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
