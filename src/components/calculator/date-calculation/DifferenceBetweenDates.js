import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateCalculation.css";

const DifferenceBetweenDates = ({
  startDate,
  endDate,
  onChangeStart,
  onChangeEnd,
  datesDiff
}) => {
  const styles = {
    fontSize: "1.5em",
    fontWeight: "normal"
  };

  return (
    <div>
      <br />
      <h4>From</h4>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        onChange={onChangeStart}
        className="datePicker"
      />
      <br />
      <br />
      <h4>To</h4>
      <DatePicker
        selected={endDate}
        endDate={endDate}
        onChange={onChangeEnd}
        className="datePicker"
      />
      <br />
      <br />
      <br />
      <span style={styles}>Difference</span>
      <br />
      <span
        style={{
          marginTop: "20px",
          fontSize: "1.5em",
          fontWeight: "bold"
        }}
      >
        {datesDiff} days{" "}
      </span>
    </div>
  );
};

export default DifferenceBetweenDates;
