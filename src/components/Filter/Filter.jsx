import { useState } from "react";
import arrowIcon from "../../assets/arrow.png";
import "../../styles/mainStyles/actionContainer.css";
import FilterDetails from "./FilterDetails/FilterDetails";

export default function Filter() {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <div className="action-wrapper">
      <div className="mobile-action-container">
        <p className="action-container-title">Filter</p>
        {showDetails ? (
          <img
            src={arrowIcon}
            alt="Arrow icon"
            className="arrow-icn arrow-bottom"
            onClick={() => setShowDetails(!showDetails)}
          />
        ) : (
          <img
            src={arrowIcon}
            alt="Arrow icon"
            className="arrow-icn"
            onClick={() => setShowDetails(!showDetails)}
          />
        )}
      </div>
      {showDetails && <FilterDetails />}
    </div>
  );
}
