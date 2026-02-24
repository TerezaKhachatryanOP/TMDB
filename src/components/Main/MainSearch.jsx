import "../../styles/mainStyles/mainSearch.css";

export default function MainSearch({ isSearchEnabled }) {
  return (
    <button className="action-search" disabled={isSearchEnabled}>
      Search
    </button>
  );
}
