import plusIcon from "../../assets/plus.png";
import bellIcon from "../../assets/bell.png";
import searchIcon from "../../assets/search.svg";
import closeIcon from "../../assets/close-icon.png"

import "../../styles/header/navActions.css";

import Profile from "../../components/header/Profile";

export default function NavActions({ showNavSearch, setShowNavSearch }) {
  return (
    <div className="nav-actions-wrapper">
      <img src={plusIcon} alt="Plus Icon" className="nav-icon desktop-item" />
      <li className="language desktop-item">EN</li>
      <img src={bellIcon} alt="Bell Icon" className="nav-icon" />
      <Profile />
      {showNavSearch ? 
        <img src={closeIcon} alt="Close Icon" className="nav-icon" onClick={() => setShowNavSearch(false)}/>
        :<img src={searchIcon} alt="Search Icon" className="nav-icon" onClick={() => setShowNavSearch(true)}/>}
    </div>
  );
}
