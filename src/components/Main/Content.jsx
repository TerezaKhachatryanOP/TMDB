import "../../styles/mainStyles/content.css";
import Actions from "./Actions";
import { FilterProvider } from "../Context/FilterProvider.jsx";
import MovieCards from "../MovieCards/MovieCards.jsx";
import { useState } from "react";

export default function Content() {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (id) => {
    setSelectedGenres((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id],
    );
  };
  return (
    <FilterProvider>
    <div className="content-wrapper">
      <div>
        <h1 className="content-header">Popular Movies</h1>
          <Actions selectedGenres={selectedGenres} toggleGenre={toggleGenre} />
      </div>
        <MovieCards selectedGenres={selectedGenres} />
    </div>
    </FilterProvider>
  );
}
