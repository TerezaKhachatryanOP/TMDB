import { useState } from "react";
import ShowInputs from "./ShowFilterInputs.jsx";
import "../../../styles/FilterStyles/ShowMe.css";

export default function ShowMe() {
  const [selected, setSelected] = useState("Everything");

  const options = ["Everything", "Movies I Haven't Seen", "Movies I Have Seen"];
  return (
    <div className="action-content-wrapper">
      <h1 className="show-me-header">Show Me</h1>

      <div className="show-me-input-wrapper">
        {options.map((option) => (
          <ShowInputs
            key={option}
            name="showMe"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
}
