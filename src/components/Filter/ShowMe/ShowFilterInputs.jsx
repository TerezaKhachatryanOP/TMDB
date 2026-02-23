import "../../../styles/FilterStyles/ShowMe.css";

export default function ShowFilterInputs({ value, checked, onChange, name }) {
  return (
    <div className="show-me-input">
      <input
      className="input-item"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="input-item" htmlFor={value}>{value}</label>
    </div>
  );
}
