export default function AdultContent() {
  return (
    <div className="action-content-wrapper">
        <h1 className="action-content-header">Adult content</h1>
        <select className="select-to-sort">
        <option value="someOption">Exclude adult</option>
        <option value="otherOption">Include adult</option>
        </select>
    </div>
  );
}
