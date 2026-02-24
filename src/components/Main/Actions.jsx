import { useEffect, useState } from "react";
import Filter from "../Filter/Filter.jsx";
import MainSearch from "./MainSearch";
import Sort from "./Sort";
import { useFilter } from "../Context/FilterProvider.jsx";
import "../../styles/FilterStyles/actions.css";

export default function Actions({ selectedGenres, toggleGenre }) {
  const [sortedValue, setSortedValue] = useState(null);
  const [atTop, setAtTop] = useState(true);
  const { isFilterDirty } = useFilter();

  const isSearchEnabled = sortedValue !== null || isFilterDirty;

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <Sort onChange={setSortedValue} />
        <Filter selectedGenres={selectedGenres} toggleGenre={toggleGenre} />
        <MainSearch isSearchEnabled={!isSearchEnabled} />
      </div>

      {!isFilterDirty && atTop && (
        <button className="big-bottom-button">Search</button>
      )}
    </>
  );
}
