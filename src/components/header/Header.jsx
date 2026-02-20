import Nav from "./Nav";
import "../../styles/header/header.css";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <div className="header-container">
      <BurgerMenu />
      <Nav />
    </div>
  );
}
