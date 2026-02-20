import "../../styles/mainStyles/sortDetails.css";

export default function SortDetails({ sortOptions }) {
  return (
    <div className="sort-details">
      <p>Sort Results By</p>
      <select name="select-to-sort" className="select-to-sort">
        {sortOptions.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
