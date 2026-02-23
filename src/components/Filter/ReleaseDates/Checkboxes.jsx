import "../../../styles/FilterStyles/checkboxes.css";

export default function Checkboxes({ value, checked, onChange, name }) {
  return (
    <div className="checkbox-container">
      <input
        className="checkbox-item"
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="checkbox-item" htmlFor={value}>
        {value}
      </label>
    </div>
  );
}
