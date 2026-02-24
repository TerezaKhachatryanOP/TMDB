import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateField from "./DateFiels";
import { useFilter } from "../../Context/FilterProvider";

export default function DateRangeFields() {
  const { setIsFilterDirty } = useFilter();
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(new Date("2026-08-23"));

  const fromRef = useRef(null);
  const toRef = useRef(null);

  const format = (d) =>
    d ? `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}` : "";

  return (
    <div style={{ display: "grid", gap: 12, width: "100%", marginTop: "1rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60px 1fr",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ color: "#888" }}>from</div>

        <DatePicker
          ref={fromRef}
          selected={from}
          onChange={(date) => {
            setFrom(date);
            setIsFilterDirty(true);
          }}
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60px 1fr",
          alignItems: "center",
          gap: 12,
        }}
      >
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
