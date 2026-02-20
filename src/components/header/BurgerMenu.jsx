import burgerMenuIcon from "../../assets/burger-menu.png";
import "../../styles/header/burgerMenu.css";

export default function BurgerMenu({ showMobileMenu, setShowMobileMenu }) {
  return (
    <img
      src={burgerMenuIcon}
      alt="Burger Menu"
      className="burger-menu"
      onClick={() => setShowMobileMenu(!showMobileMenu)}
    />
  );
}
