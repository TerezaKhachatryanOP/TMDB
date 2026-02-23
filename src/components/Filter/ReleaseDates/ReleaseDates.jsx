import SearchReleases from "./SearchReleases";
import "../../../styles/FilterStyles/releaseDates.css";
import DateRangeFields from "./DateRangeFields";

export default function ReleaseDates() {
  return (
    <div className="release-dates-wrapper">
      <h1 className="release-header">Release Dates</h1>
      <SearchReleases />
      <DateRangeFields />
    </div>
  );
}
