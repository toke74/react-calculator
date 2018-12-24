import React, { Component } from "react";
import Navbar from "../../navbar/Navbar";
import convert from "convert-units";
import SelectVolume from "./SelectVolume";

export class VolumeCalculation extends Component {
  state = {
    unitTo: "m3",
    unitFrom: "mm3",
    lenght: "1"
  };

  handleUnit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChange = e => {
    this.setState({ lenght: e.target.value });
  };

  calculateVolume = () => {
    const { unitTo, unitFrom, lenght } = this.state;
    let result = convert(lenght)
      .from(unitFrom)
      .to(unitTo);
    return result;
    // return Number.parseFloat(result).toFixed(5);
  };

  render() {
    return (
      <div>
        <Navbar value=" Volume Calculation" />

        <div className="volume">
          <SelectVolume
            handleUnit={this.handleUnit}
            onChange={this.onChange}
            result={this.calculateVolume()}
          />
        </div>
      </div>
    );
  }
}

export default VolumeCalculation;
