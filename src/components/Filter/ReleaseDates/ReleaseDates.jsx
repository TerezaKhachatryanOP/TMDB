import SearchReleases from "./SearchReleases";
import "../../../styles/FilterStyles/releaseDates.css";
import DateRangeFields from "./DateRangeFields";

export default function ReleaseDates() {
  return (
    <div className="action-content-wrapper">
      <h1 className="action-content-header">Release Dates</h1>
      <SearchReleases />
      <DateRangeFields />
    </div>
  );
}
