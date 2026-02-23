import { useState } from "react";
import "../../../styles/FilterStyles/userCoreSlider.css";

export default function UserScoreSlider({
  min = 0,
  max = 10,
  step = 1,
  defaultValue = 0,
  onChange,
}) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const v = Number(e.target.value);
    setValue(v);
    onChange?.(v);
  };
  const ticks = Array.from(
    { length: (max - min) / step + 1 },
    (_, i) => min + i * step
  );

  return (
    <div className="user-score-container">
      <h2 className="action-content-header">User Score</h2>

      <div className="slider-wrapper">
        <div className="slider-ticks">
          {ticks.map((t) => (
            <div
              key={t}
              className={`tick ${t === 0 || t === 5 || t === 10 ? "major" : ""}`}
            />
          ))}
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="user-score-range"
        />
        <div className="slider-labels">
          <span>0</span>
          <span>5</span>
          <span>10</span>
        </div>
      </div>
    </div>
  );
}