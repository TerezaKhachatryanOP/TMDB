import arrowIcon from "../../assets/arrow.png";
import "../../styles/mainStyles/actionContainer.css";

export default function Sort() {
  return (
    <div className="mobile-action-container">
      <p className="action-container-title">Sort</p>
      <img src={arrowIcon} alt="Arrow icon" className="arrow-icn" />
    </div>
  );
}
