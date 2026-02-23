import { useState, useEffect } from "react";
import { getCountries } from "../filterCountries.js";

export default function CountryOptions() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  const handleChange = (iso) => {
    setSelected((prev) =>
      prev.includes(iso) ? prev.filter((item) => item !== iso) : [...prev, iso],
    );
  };

  return (
    <div className="countries-wrapper">
      {countries.map((country) => (
        <label key={country.iso_3166_1} className="country-option">
          <input
            type="checkbox"
            value={country.iso_3166_1}
            checked={selected.includes(country.iso_3166_1)}
            onChange={() => handleChange(country.iso_3166_1)}
          />
          <img
            src={`https://flagcdn.com/24x18/${country.iso_3166_1.toLowerCase()}.png`}
            alt={country.english_name}
            style={{ marginRight: "8px" }}
          />
          {country.english_name}
        </label>
      ))}

      {/* Optional: display selected countries with flags */}
      {selected.length > 0 && (
        <div className="selected-countries" style={{ marginTop: "16px" }}>
          {selected.map((iso) => {
            const country = countries.find((c) => c.iso_3166_1 === iso);
            if (!country) return null;
            return (
              <span key={iso} style={{ marginRight: "12px" }}>
                <img
                  src={`https://flagcdn.com/24x18/${iso.toLowerCase()}.png`}
                  alt={country.english_name}
                  style={{ marginRight: "4px" }}
                />
                {country.english_name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
