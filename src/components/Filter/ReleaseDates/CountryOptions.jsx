import { useState, useEffect, useRef } from "react";
import { getCountries } from "../filterCountries.js";
import "../../../styles/FilterStyles/countryoptions.css";

export default function CountryOptions({ show, selectedCountry, onSelect }) {
  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const data = await getCountries();

      const sorted = data.sort((a, b) => {
        if (a.english_name === "Armenia") return -1;
        if (b.english_name === "Armenia") return 1;
        return 0;
      });

      setCountries(sorted);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!show) return null;

  const selected = countries.find((c) => c.iso_3166_1 === selectedCountry);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selected && (
          <>
            <img
              src={`https://flagcdn.com/24x18/${selected.iso_3166_1.toLowerCase()}.png`}
              alt={selected.english_name}
            />
            {selected.english_name}
          </>
        )}
      </div>

      {isOpen && (
        <div className="dropdown-list">
          {countries.map((country) => (
            <div
              className="dropdown-list-item"
              key={country.iso_3166_1}
              onClick={() => {
                onSelect(country.iso_3166_1);
                setIsOpen(false);
              }}
            >
              <img
                src={`https://flagcdn.com/24x18/${country.iso_3166_1.toLowerCase()}.png`}
                alt={country.english_name}
              />
              {country.english_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
