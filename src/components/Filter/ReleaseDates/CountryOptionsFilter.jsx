import "../../../styles/FilterStyles/countryFilter.css";
import searchIcn from "../../../assets/nav-search.png";
export default function CountryOptionsFilter({ value, setSearchText }) {
  return (
    <div className="country-input-search-wrapper">
      <img src={searchIcn} alt="search-icon" className="nav-search-icn" />
      <input
        onChange={(e) => setSearchText(e.target.value)}
        className="country-filter"
        name="Search-input"
        type="text"
        value={value}
        placeholder="Filter"
      />
    </div>
  );
}
