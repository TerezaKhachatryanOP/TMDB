import { useEffect, useState } from "react";
import { FilterLanguage } from "./FilterLanguage";
import { useFilter } from "../../Context/FilterProvider.jsx";

export default function Language() {
  const [languages, setLanguages] = useState([]);
  const { setIsFilterDirty } = useFilter();

  const handleChange = () => {
    setIsFilterDirty(true);
  };

  useEffect(() => {
    async function fetchLanguage() {
      const data = await FilterLanguage();
      setLanguages(data);
    }
    fetchLanguage();
  }, []);

  return (
    <div className="action-content-wrapper">
      <h1 className="action-content-header">Language</h1>
      <select className="select-to-sort" onChange={handleChange}>
        {languages.map((lang) => (
          <option key={lang.iso_639_1} value={lang.iso_639_1}>
            {lang.english_name}
          </option>
        ))}
      </select>
    </div>
  );
}
