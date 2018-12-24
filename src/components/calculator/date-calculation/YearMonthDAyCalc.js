import React, { Component } from "react";

export class YearMonthDAyCalc extends Component {
  state = {
    value: "add",
    years: "",
    months: "",
    days: ""
  };

  onChangeHandle = e => {
    this.setState({ value: e.target.value });
  };

  onChangeYear = e => {
    this.setState({ years: e.target.value });
  };

  onChangeMonth = e => {
    this.setState({ months: e.target.value });
  };
  onChangeDay = e => {
    this.setState({ days: e.target.value });
  };

  addDates = date => {
    const years = Number(this.state.years);
    const months = Number(this.state.months);
    const days = Number(this.state.days);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const newDate = new Date();
    let addDates;

    addDates = newDate.setFullYear(date.getFullYear() + years);
    addDates = newDate.setMonth(date.getMonth() + months);
    addDates = newDate.setDate(date.getDate() + days);

    const dis = new Date(addDates);
    return dis.toLocaleDateString("en-US", options);
  };

  subtractDates = date => {
    const years = Number(this.state.years);
    const months = Number(this.state.months);
    const days = Number(this.state.days);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const newDate = new Date();
    let addDates;

    addDates = newDate.setFullYear(date.getFullYear() - years);
    addDates = newDate.setMonth(date.getMonth() - months);
    addDates = newDate.setDate(date.getDate() - days);

    const dis = new Date(addDates);
    return dis.toLocaleDateString("en-US", options);
  };

  render() {
    let options = [];
    const { sDate } = this.props;
    const add = this.addDates(sDate);
    const subtract = this.subtractDates(sDate);

    const addOrSub =
      this.state.value === "add" ? <h3>{add}</h3> : <h3>{subtract}</h3>;
    let i = 0;
    while (i < 1000) {
      options.push(i);
      i++;
    }

    const optionNumber = options.map(opt => {
      return (
        <option key={opt} style={{ backgroundColor: "#94e7e396" }} value={opt}>
          {opt}
        </option>
      );
    });

    return (
      <div>
        <br />
        <div>
          <input
            type="radio"
            name="addOrSubstract"
            value="add"
            defaultChecked
            onChange={this.onChangeHandle}
          />
          <span className="add">Add</span>
          <input
            type="radio"
            name="addOrSubstract"
            value="substract"
            onChange={this.onChangeHandle}
          />
          <span className="substract">Substract</span>
        </div>
        <br />
        <br />

        <div className="dayMonthYear">
          <div className="year">
            <div>Years</div>
            <select defaultValue="0" onChange={this.onChangeYear}>
              {optionNumber}
            </select>
          </div>
          <div className="month">
            <div>Months</div>
            <select defaultValue="0" onChange={this.onChangeMonth}>
              {optionNumber}
            </select>
          </div>
          <div className="day">
            <div>Days</div>
            <select defaultValue="0" onChange={this.onChangeDay}>
              {optionNumber}
            </select>
          </div>
        </div>
        <br />
        <br />
        <div>Date</div>
        <div>{addOrSub}</div>
      </div>
    );
  }
}

export default YearMonthDAyCalc;
