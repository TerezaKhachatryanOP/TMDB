import AdultContent from "../AdultContent/AdultContent.jsx";
import Certifications from "../Certifications.jsx";
import Genres from "../Genres/Genres.jsx";
import Language from "../Language/Language.jsx";
import ReleaseDates from "../ReleaseDates/ReleaseDates.jsx";
import ShowMe from "../ShowMe/ShowMe.jsx";
import UserScoreSlider from "../Slider/UserCoreSlider.jsx";

export default function FilterDetails() {
  return (
    <div className="filter-details">
      <ShowMe />
      <ReleaseDates />
      <Genres />
      <Certifications />
      <AdultContent />
      <Language />
      <UserScoreSlider />
    </div>
  );
}
