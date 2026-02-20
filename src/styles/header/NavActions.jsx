import plusIcon from "../../assets/plus.png";
import bellIcon from "../../assets/bell.png";
import searchIcon from "../../assets/search.svg";
import "../../styles/header/navActions.css";

import Profile from "../../components/header/Profile";

export default function NavActions() {
  return (
    <div className="nav-actions-wrapper">
      <img src={plusIcon} alt="Plus Icon" className="nav-icon desktop-item" />
      <li className="language desktop-item">EN</li>
      <img src={bellIcon} alt="Bell Icon" className="nav-icon" />
      <Profile />
      <img src={searchIcon} alt="Search Icon" className="nav-icon" />
    </div>
  );
}
