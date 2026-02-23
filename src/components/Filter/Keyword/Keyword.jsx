import { useEffect, useState } from "react";
import "../../../styles/FilterStyles/keyword.css";
import { filterKeyword } from "./filterKeyword";

export default function Keyword() {
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setKeyword([]);
      return;
    }
    const delay = setTimeout(async () => {
      const data = await filterKeyword(query);
      setKeyword(data);
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);
  return (
    <div className="action-content-wrapper">
      <h1 className="action-content-header">Keywords</h1>
      <input
        className="keyword-input"
        type="text"
        placeholder="Filter by keywords..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {keyword.length > 0 && (
        <div className="keyword-dropdown">
          {keyword.map((word) => (
            <div
              key={word.id}
              className="keyword-item"
              onClick={() => setQuery(word.name)}
            >
              {word.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
