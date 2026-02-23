import AdultContent from "../AdultContent/AdultContent.jsx";
import Certifications from "../Certifications.jsx";
import Genres from "../Genres/Genres.jsx";
import Language from "../Language/Language.jsx";
import ReleaseDates from "../ReleaseDates/ReleaseDates.jsx";
import ShowMe from "../ShowMe/ShowMe.jsx";
import Slider from "../Slider/UserCoreSlider.jsx";

export default function FilterDetails() {
  return (
    <div className="filter-details">
      <ShowMe />
      <ReleaseDates />
      <Genres />
      <Certifications />
      <AdultContent />
      <Language />
      <Slider
        label="User Score"
        min={0}
        max={10}
        step={1}
        defaultValue={0}
        variant="primary"
      />

      <Slider
        label="Minimum User Votes"
        min={0}
        max={500}
        step={50}
        defaultValue={0}
        variant="muted"
      />

      <Slider
        label="Runtime"
        min={0}
        max={400}
        step={10}
        defaultValue={400}
        variant="full"
      />
    </div>
  );
}
