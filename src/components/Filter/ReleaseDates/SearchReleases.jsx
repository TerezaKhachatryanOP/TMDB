import { useState } from "react";
import Checkboxes from "./Checkboxes.jsx";
import CountryOptions from "./CountryOptions.jsx";
import { useFilter } from "../../Context/FilterProvider.jsx";

export default function SearchReleases() {
  const { setIsFilterDirty } = useFilter();

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
  const [selectedCountry, setSelectedCountry] = useState("AM");

  const handleChange = (value) => {
    if (value === options[0]) {
      const isCurrentlySelected = selected.includes(options[0]);
      setSelected(isCurrentlySelected ? options.slice(1) : [options[0]]);
      return;
    }

    if (value === options[1]) {
      setSelected((prev) =>
        prev.includes(options[1])
          ? prev.filter((item) => item !== options[1])
          : [...prev, options[1]],
      );
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

  const showCountries =
    !selected.includes(options[1]) && !selected.includes(options[0]);

  return (
    <div>
      {visibleOptions.map((option) => (
        <Checkboxes
          key={option}
          name="search"
          value={option}
          checked={selected.includes(option)}
          onChange={() => {
            handleChange(option);
            setIsFilterDirty(true);
          }}
        />
      ))}

      <CountryOptions
        show={showCountries}
        selectedCountry={selectedCountry}
        onSelect={(country) => {
          setSelectedCountry(country);
          setIsFilterDirty(true);
        }}
      />
    </div>
  );
}
