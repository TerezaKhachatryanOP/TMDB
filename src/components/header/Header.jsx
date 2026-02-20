import Nav from "./Nav";
import "../../styles/header/header.css";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "../Mobile/MobileMenu";
import { NavContext } from "../Context/NavContext";
import { useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = [
    { label: "Movies", href: "#" },
    { label: "TV Shows", href: "#" },
    { label: "People", href: "#" },
    { label: "Awards", href: "#" },
    { label: "More", href: "#" },
  ];

  return (
    <NavContext.Provider value={navItems}>
      <div className="header-container">
        <BurgerMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
        <Nav />
      </div>
      <MobileMenu showMobileMenu={showMobileMenu} />
    </NavContext.Provider>
  );
}
