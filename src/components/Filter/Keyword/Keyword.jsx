import { useEffect, useState } from "react";
import "../../../styles/FilterStyles/keyword.css";
import { filterKeyword } from "./filterKeyword";
import { useFilter } from "../../Context/FilterProvider";

export default function Keyword() {
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState([]);
  const { setIsFilterDirty, setKeywordText } = useFilter();

  useEffect(() => {
    setKeywordText(query);

    if (!query.trim()) {
      setKeyword([]);
      return;
    }

    const delay = setTimeout(async () => {
      const data = await filterKeyword(query);
      setKeyword(data);
    }, 500);

    return () => clearTimeout(delay);
  }, [query, setKeywordText]);

  return (
    <div className="action-content-wrapper">
      <h1 className="action-content-header">Keywords</h1>
      <input
        className="keyword-input"
        type="text"
        placeholder="Filter by keywords..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsFilterDirty(true);
        }}
      />
      {keyword.length > 0 && (
        <div className="keyword-dropdown">
          {keyword.map((word) => (
            <div
              key={word.id}
              className="keyword-item"
              onClick={() => {
                setQuery(word.name);
                setIsFilterDirty(true);
              }}
            >
              {word.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}