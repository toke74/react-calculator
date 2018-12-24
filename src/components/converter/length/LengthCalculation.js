import React, { Component } from "react";
import Navbar from "../../navbar/Navbar";
import SelectLenth from "./SelectLength";
import convert from "convert-units";
import "./LengthCalculation.css";

export class LengthCalculation extends Component {
  state = {
    unitTo: "m",
    unitFrom: "mm",
    lenght: "1"
  };

  handleUnit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChange = e => {
    this.setState({ lenght: e.target.value });
  };

  calculateLenght = () => {
    const { unitTo, unitFrom, lenght } = this.state;
    let result = convert(lenght)
      .from(unitFrom)
      .to(unitTo);
    return result;
  };

  render() {
    return (
      <div>
        <Navbar value=" Length Calculation" />

        <div className="lenght">
          <SelectLenth
            handleUnit={this.handleUnit}
            onChange={this.onChange}
            result={this.calculateLenght()}
          />
        </div>
      </div>
    );
  }
}

export default LengthCalculation;
