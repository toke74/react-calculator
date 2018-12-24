import React, { Component } from "react";
import Navbar from "../../navbar/Navbar";
import DifferenceBetweenDates from "./DifferenceBetweenDates";
import AddOrSubtractDays from "./AddOrSubtractDays";

import "./DateCalculation.css";
export class DateCalculation extends Component {
  state = {
    value: "diffBtnDates",
    startDate: new Date(),
    endDate: new Date(),
    startDates: new Date()
  };

  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
  };
  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };

  onChangeDate = date => {
    this.setState({
      startDates: date
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const dateFirst = this.state.endDate;
    const dateSecond = this.state.startDate;

    // time difference
    const timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());

    // days difference
    const datesDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    const displaye =
      this.state.value === "diffBtnDates" ? (
        <div className="diffBtnDates">
          <div>
            <DifferenceBetweenDates
              onChangeEnd={this.handleChangeEnd}
              onChangeStart={this.handleChangeStart}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              datesDiff={datesDiff}
            />
          </div>
        </div>
      ) : (
        <div className="addOrSubtract">
          <div>
            <AddOrSubtractDays
              startDate={this.state.startDates}
              handleChange={this.onChangeDate}
            />
          </div>
        </div>
      );

    return (
      <div>
        <Navbar value="Date Calculation" />
        <div className="title">Date Calculation</div>
        <div className="dateCalc">
          <select
            className="selectDate"
            defaultValue="diffBtnDates"
            onChange={this.handleChange}
          >
            <option
              style={{ backgroundColor: "#94e7e396" }}
              value="diffBtnDates"
            >
              Difference between dates
            </option>
            <option
              style={{ backgroundColor: "#94e7e396" }}
              value="addOrSubtract"
            >
              Add or subtract days
            </option>
          </select>

          {displaye}
        </div>
      </div>
    );
  }
}

export default DateCalculation;
