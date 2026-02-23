export default function ShowFilterInputs({ value, checked, onChange, name }) {
  return (
    <div className="show-me-input">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}
