import { useState } from "react";
import Filter from "../Filter/Filter.jsx";
import MainSearch from "./MainSearch";
import Sort from "./Sort";
import { useFilter } from "../Context/FilterProvider.jsx";

export default function Actions({ selectedGenres, toggleGenre }) {
  const [sortedValue, setSortedValue] = useState(null);
  const { isFilterDirty } = useFilter();

  const isSearchEnabled = sortedValue !== null || isFilterDirty;

  return (
    <div>
      <Sort onChange={setSortedValue} />
      <Filter selectedGenres={selectedGenres} toggleGenre={toggleGenre} />
      <MainSearch isSearchEnabled={!isSearchEnabled} />
    </div>
  );
}
