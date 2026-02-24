import { useEffect, useState } from "react";
import { GetMovies } from "./GetMovies";
import "../../styles/MovieStyles/MovieCard.css";
import LoadMore from "./LoadMore";
import noImageIcn from "../../assets/no-image.png";
import ScoreRing from "./ScoreRing";
import { useFilter } from "../Context/FilterProvider";

export default function MovieCard({ selectedGenres = [] }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { keywordText } = useFilter();

  useEffect(() => {
    async function fetchMoves() {
      const data = await GetMovies();
      setMovies(data.results.slice(0, 10));
    }
    fetchMoves();
  }, []);

  const IMG_BASE = "https://image.tmdb.org/t/p/w500";

  const handleClick = async () => {
    setLoading(true);

    const start = Date.now();
    const data = await GetMovies();
    setMovies(data.results);

    const elapsed = Date.now() - start;
    const minTime = 1000;

    if (elapsed < minTime) {
      await new Promise((res) => setTimeout(res, minTime - elapsed));
    }

    setLoading(false);
  };

  const q = (keywordText || "").trim().toLowerCase();

  const filteredMovies = movies.filter((m) => {
    const genreOk =
      !selectedGenres.length ||
      selectedGenres.some((id) => m.genre_ids.includes(id));

    const textOk =
      !q ||
      (m.title || "").toLowerCase().includes(q) ||
      (m.overview || "").toLowerCase().includes(q);

    return genreOk && textOk;
  });

  return (
    <>
      {loading && <div className="top-loader" />}
      <div>
        <div className="movie-card-wrapper">
          {filteredMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              {movie.backdrop_path ? (
                <img
                  className="movie-img"
                  src={`${IMG_BASE}${movie.backdrop_path}`}
                  alt="Movie Image"
                />
              ) : (
                <div className="no-image-card">
                  <img src={noImageIcn} alt="No Image" />
                </div>
              )}
              <div className="movie-details">
                <div className="percent">
                  <ScoreRing value={movie.vote_average} size={40} stroke={4} />
                  <span className="percent-text">
                    {movie.vote_average
                      ? Math.round(movie.vote_average * 10)
                      : "NR"}
                  </span>
                </div>
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-date">{movie.release_date}</p>
                <p className="movie-desc">
                  {movie.overview
                    ? movie.overview.split(" ").slice(0, 25).join(" ") +
                      (movie.overview.split(" ").length > 25 ? "..." : "")
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>

        <LoadMore handleClick={handleClick} />
      </div>
    </>
  );
}
