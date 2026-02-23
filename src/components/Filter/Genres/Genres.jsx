import { useEffect, useState } from "react";
import { getGenres } from "./GetGenres";
import "../../../styles/FilterStyles/genres.css";

export default function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getGenres();
      setGenres(data.genres);
    }
    fetchData();
  }, []);

  return (
    <div className="genres-container">
      <div className="release-header">Genres</div>
      {genres.map((genre) => (
        <button id={genre.id} className="genre">
          {genre.name}
        </button>
      ))}
    </div>
  );
}
