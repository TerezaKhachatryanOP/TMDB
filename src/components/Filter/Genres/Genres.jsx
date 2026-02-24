import { useEffect, useState } from "react";
import { getGenres } from "./GetGenres";
import "../../../styles/FilterStyles/genres.css";
import { useFilter } from "../../Context/FilterProvider.jsx";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const { setIsFilterDirty } = useFilter();

  useEffect(() => {
    async function fetchData() {
      const data = await getGenres();
      setGenres(data.genres);
    }
    fetchData();
  }, []);

  return (
    <div className="genres-container">
      <div className="action-content-header">Genres</div>
      {genres.map((genre) => (
        <button
          key={genre.id}
          className="genre"
          onClick={() => setIsFilterDirty(true)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
