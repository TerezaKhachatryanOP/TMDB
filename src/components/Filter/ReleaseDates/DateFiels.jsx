import calendarIcn from "../../../assets/calendar.svg";
import "../../../styles/FilterStyles/dataField.css";
export default function DateField({ value, onOpen }) {
  return (
    <div>
      <input
        value={value}
        readOnly
        onClick={onOpen}
        className="data-field-input"
      />
      <button
        type="button"
        onClick={onOpen}
        aria-label="Open calendar"
        className="calendar-btn"
      >
        <img src={calendarIcn} alt="calendar icon" className="calendar-icon" />
      </button>
    </div>
  );
}
