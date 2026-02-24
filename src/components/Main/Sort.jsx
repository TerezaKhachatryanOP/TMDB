import { useState } from "react";
import arrowIcon from "../../assets/arrow.png";
import "../../styles/mainStyles/actionContainer.css";
import SortDetails from "./SortDetails";

const sortOptions = [
  { name: "Popularity Descending", id: 1 },
  { name: "Popularity Ascending", id: 2 },
  { name: "Rating Descending", id: 3 },
  { name: "Rating Ascending", id: 4 },
  { name: "Release Date Descending", id: 5 },
  { name: "Release Date Ascending", id: 6 },
  { name: "Title (A-Z)", id: 7 },
  { name: "Title (Z-A)", id: 8 },
];
export default function Sort({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="action-wrapper">
      <div className="mobile-action-container">
        <p className="action-container-title">Sort</p>
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
      {showDetails && (
        <SortDetails sortOptions={sortOptions} handleChange={handleChange} />
      )}
    </div>
  );
}
