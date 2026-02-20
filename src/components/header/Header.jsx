import Nav from "./Nav";
import "../../styles/header/header.css";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "../Mobile/MobileMenu";
import { NavContext } from "../Context/NavContext";
import { useState } from "react";
import NavSearch from "../Search/NavSearch";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNavSearch, setShowNavSearch] = useState(false);

  const navItems = [
    {
      label: "Movies",
      href: "#",
      subcategories: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
    },
    {
      label: "TV Shows",
      href: "#",
      subcategories: ["Popular", "Airing Today", "On TV", "Top Rated"],
    },
    { label: "People", href: "#", subcategories: ["Popular"] },
    { label: "Awards", href: "#", subcategories: ["Popular", "Upcoming"] },
    {
      label: "More",
      href: "#",
      subcategories: [
        "Discussion",
        "Leaderboard",
        "Support",
        "API Documentation",
        "API for Business",
      ],
    },
  ];

  return (
    <NavContext.Provider value={navItems}>
      <div className="header-container">
        <BurgerMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
        <Nav
          showNavSearch={showNavSearch}
          setShowNavSearch={setShowNavSearch}
        />
      </div>
      {showNavSearch && <NavSearch />}
      <MobileMenu showMobileMenu={showMobileMenu} />
    </NavContext.Provider>
  );
}
