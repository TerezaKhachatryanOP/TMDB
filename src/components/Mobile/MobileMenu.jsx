import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../Context/NavContext";
import "../../styles/MobileMenu/mobileMenu.css";

const mobileMenuHelperLinks = [
  { label: "Contribution Bible", href: "#" },
  { label: "Discussions", href: "#" },
  { label: "Leaderboard", href: "#" },
  { label: "API", href: "#" },
  { label: "Support", href: "#" },
  { label: "About", href: "#" },
  { label: "Logout", href: "#" },
];

export default function MobileMenu({ showMobileMenu }) {
  const navItems = useContext(NavContext);
  return (
    <div className={`mobile-menu-wrapper ${showMobileMenu ? "open" : ""}`}>
      {navItems.slice(0, -1).map((item) => (
        <Link
          className="mobile-nav-general-link"
          to={item.href}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
      {mobileMenuHelperLinks.map((item) => (
        <Link className="mobile-nav-link" to={item.href} key={item.label}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
