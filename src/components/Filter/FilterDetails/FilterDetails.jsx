import Genres from "../Genres/Genres.jsx";
import ReleaseDates from "../ReleaseDates/ReleaseDates.jsx";
import ShowMe from "../ShowMe/ShowMe.jsx";

export default function FilterDetails() {
  return (
    <div className="filter-details">
      <ShowMe />
      <ReleaseDates />
      <Genres />
    </div>
  );
}
