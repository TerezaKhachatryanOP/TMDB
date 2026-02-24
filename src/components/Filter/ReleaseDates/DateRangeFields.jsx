import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateField from "./DateFiels";
import { useFilter } from "../../Context/FilterProvider";
import "../../../styles/FilterStyles/DateRangeFields.css"

export default function DateRangeFields() {
  const { setIsFilterDirty } = useFilter();
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(new Date("2026-08-23"));

  const fromRef = useRef(null);
  const toRef = useRef(null);

  const format = (d) =>
    d ? `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}` : "";

  return (
    <div className="date-range-fields">
      <div className="date-range-fields-container">
        <div className="date-time">from</div>

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
          gridTemplateColumns: "3.75rem 1fr",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div className="date-time">to</div>

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
