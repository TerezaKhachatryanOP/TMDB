import calendarIcn from "../../../assets/calendar.svg"
import "../../../styles/FilterStyles/dataField.css"
export default function DateField({ value, onOpen }) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        value={value}
        readOnly
        onClick={onOpen}
        style={{
          width: "100%",
          height: 40,
          padding: "0 42px 0 12px",
          border: "1px solid #d9d9d9",
          borderRadius: 6,
          outline: "none",
          fontSize: 14,
        }}
      />
      <button
        type="button"
        onClick={onOpen}
        aria-label="Open calendar"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 40,
          height: 40,
          display: "grid",
          placeItems: "center",
          borderLeft: "1px solid #d9d9d9",
          borderTop: "1px solid transparent",
          borderRight: "1px solid transparent",
          borderBottom: "1px solid transparent",
          background: "transparent",
          cursor: "pointer",
          color: "#444",
          borderRadius: "0 6px 6px 0",
        }}
      >
    <img src={calendarIcn} alt="calendar icon" className="calendar-icon"/>
    </button>
    </div>
  );
}