import { useEffect, useState } from "react";
import { FilterLanguage } from "./FilterLanguage";

export default function Language() {
  const [languages, setLanguages] = useState([]);
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
      <select className="select-to-sort">
        {languages.map((lang) => (
          <option key={lang.iso_639_1} value={lang.iso_639_1}>
            {lang.english_name}
          </option>
        ))}
      </select>
    </div>
  );
}
