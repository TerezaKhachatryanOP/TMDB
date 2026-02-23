import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1.5A2.5 2.5 0 0 1 22 6.5v14A2.5 2.5 0 0 1 19.5 23h-15A2.5 2.5 0 0 1 2 20.5v-14A2.5 2.5 0 0 1 4.5 4H6V3a1 1 0 0 1 1-1Zm12.5 6h-15a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DateField({ value, onOpen }) {
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
        <CalendarIcon />
      </button>
    </div>
  );
}

export default function DateRangeFields() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(new Date("2026-08-23"));

  const fromRef = useRef(null);
  const toRef = useRef(null);

  const format = (d) =>
    d
      ? `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
      : "";

  return (
    <div style={{ display: "grid", gap: 12, width: 420 }}>
      <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", alignItems: "center", gap: 12 }}>
        <div style={{ color: "#888", fontSize: 14 }}>from</div>

        <DatePicker
          ref={fromRef}
          selected={from}
          onChange={(date) => setFrom(date)}
          selectsStart
          startDate={from}
          endDate={to}
          customInput={
            <DateField
              value={format(from)}
              onOpen={() => fromRef.current?.setOpen(true)}
            />
          }
          popperPlacement="bottom-end"
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", alignItems: "center", gap: 12 }}>
        <div style={{ color: "#888", fontSize: 14 }}>to</div>

        <DatePicker
          ref={toRef}
          selected={to}
          onChange={(date) => setTo(date)}
          selectsEnd
          startDate={from}
          endDate={to}
          minDate={from || undefined}
          customInput={
            <DateField
              value={format(to)}
              onOpen={() => toRef.current?.setOpen(true)}
            />
          }
          popperPlacement="bottom-end"
        />
      </div>
    </div>
  );
}