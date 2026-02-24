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
    <div className="content-wrapper">
      <div>
        <h1 className="content-header">Popular Movies</h1>
        <FilterProvider>
          <Actions selectedGenres={selectedGenres} toggleGenre={toggleGenre} />
        </FilterProvider>
      </div>
      <MovieCards selectedGenres={selectedGenres} />
    </div>
  );
}
