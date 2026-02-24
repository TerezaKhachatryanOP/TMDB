import { useEffect, useState } from "react";
import { GetMovies } from "./GetMovies";
import "../../styles/MovieStyles/MovieCard.css";

export default function MovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoves() {
      const data = await GetMovies();
      setMovies(data.results);
    }
    fetchMoves();
  }, []);

  const IMG_BASE = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card-wrapper">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          {movie.backdrop_path && (
            <img
              className="movie-img"
              src={`${IMG_BASE}${movie.backdrop_path}`}
              alt="Movie Avatar"
            />
          )}
          <div className="movie-details">
            <h1 className="movie-title">{movie.title}</h1>
            <p className="movie-date">{movie.release_date}</p>
            <p className="movie-desc">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
