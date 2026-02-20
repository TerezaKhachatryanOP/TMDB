import "../../styles/header/nav.css";
import NavActions from "../../styles/header/NavActions";
import NavLinks from "./NavLinks";

const navItems = [
  { label: "Movies", href: "#" },
  { label: "TV Shows", href: "#" },
  { label: "People", href: "#" },
  { label: "Awards", href: "#" },
  { label: "More", href: "#" },
];

export default function Nav() {
  return (
    <>
      <div className="nav-wrapper">
        <picture>
          <source
            media="(min-width: 66.25rem)"
            srcSet="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          />
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="Logo"
            className="logo"
          />
        </picture>
        <NavLinks navItems={navItems} />
      </div>
      <NavActions />
    </>
  );
}
