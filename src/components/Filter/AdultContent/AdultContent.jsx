import { useFilter } from "../../Context/FilterProvider.jsx";

export default function AdultContent() {
  const { setIsFilterDirty } = useFilter();
  const handleChange = () => {
    setIsFilterDirty(ture);
  };
  return (
    <div className="action-content-wrapper">
      <h1 className="action-content-header">Adult content</h1>
      <select className="select-to-sort" onChange={handleChange}>
        <option value="someOption">Exclude adult</option>
        <option value="otherOption">Include adult</option>
      </select>
    </div>
  );
}
