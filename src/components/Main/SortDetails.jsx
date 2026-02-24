import "../../styles/mainStyles/sortDetails.css";

export default function SortDetails({ sortOptions, handleChange }) {
  return (
    <div className="sort-details">
      <p>Sort Results By</p>
      <select
        name="select-to-sort"
        className="select-to-sort"
        onChange={handleChange}
      >
        {sortOptions.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
