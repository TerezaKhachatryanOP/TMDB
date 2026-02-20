import { Link } from "react-router-dom";
import "../../styles/header/navLinks.css";

export default function NavLinks({ navItems }) {
  return (
    <div className="links-container">
      <ul className="list-ul">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link className="list-item" to={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
