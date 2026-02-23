import { useState } from "react";
import Checkboxes from "./Checkboxes.jsx";

export default function SearchReleases() {
  const options = [
    "Search all releases?",
    "Search all countries?",
    "Theatrical (limited)",
    "Theatrical",
    "Premiere",
    "Digital",
    "Physical",
    "TV",
  ];

  const [selected, setSelected] = useState([options[0]]);

  const handleChange = (value) => {
    if (value === options[0]) {
      const isCurrentlySelected = selected.includes(options[0]);

      if (isCurrentlySelected) {
        setSelected(options.slice(1));
      } else {
        setSelected([options[0]]);
      }

      return;
    }

    setSelected((prev) => {
      const withoutFirst = prev.filter((item) => item !== options[0]);

      return withoutFirst.includes(value)
        ? withoutFirst.filter((item) => item !== value)
        : [...withoutFirst, value];
    });
  };

  const shouldShowOnlyFirst =
    selected.length === 1 && selected.includes(options[0]);

  const visibleOptions = shouldShowOnlyFirst ? [options[0]] : options;

  return (
    <div>
      {visibleOptions.map((option) => (
        <Checkboxes
          key={option}
          name="search"
          value={option}
          checked={selected.includes(option)}
          onChange={() => handleChange(option)}
        />
      ))}
    </div>
  );
}
