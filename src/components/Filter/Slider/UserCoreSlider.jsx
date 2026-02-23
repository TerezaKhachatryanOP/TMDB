import { useState } from "react";
import "../../../styles/FilterStyles/slider.css";

export default function Slider({
  label,
  min = 0,
  max = 10,
  step = 1,
  defaultValue = 0,
  variant = "primary",
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
    (_, i) => min + i * step,
  );

  return (
    <div className="slider-container">
      <h3 className="action-content-header">{label}</h3>

      <div className="slider-wrapper">
        <div className="slider-ticks">
          {ticks.map((t) => (
            <div key={t} className="tick" />
          ))}
        </div>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={`slider-range slider-${variant}`}
        />

        <div className="slider-labels">
          <span>{min}</span>
          <span>{Math.floor((min + max) / 2)}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
}
