import arrowIcon from "../../assets/arrow.png";
import "../../styles/mainStyles/actionContainer.css";

export default function Filter() {
  return (
    <div className="mobile-action-container">
      <p className="action-container-title">Filter</p>
      <img src={arrowIcon} alt="Arrow icon" className="arrow-icn" />
    </div>
  );
}
