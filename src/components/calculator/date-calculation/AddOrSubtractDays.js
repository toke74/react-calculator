import React from "react";
import DatePicker from "react-datepicker";
import YearMonthDAyCalc from "./YearMonthDAyCalc";
import "react-datepicker/dist/react-datepicker.css";
import "./DateCalculation.css";

const AddOrSubtractDays = ({ startDate, handleChange }) => {
  return (
    <div>
      <br />
      <h4>From</h4>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        onChange={handleChange}
        className="datePicker"
      />
      <br />
      <br />

      <YearMonthDAyCalc sDate={startDate} />

      <br />
    </div>
  );
};

export default AddOrSubtractDays;
