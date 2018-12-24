import React, { Component } from "react";
import Navbar from "../../navbar/Navbar";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import * as math from "mathjs";
import "./Standard.css";

export class Standard extends Component {
  state = {
    result: ""
  };
  onClick = value => {
    if (value === "=") {
      this.calculateResualt();
    } else if (value === "%") {
      this.pecntCalculate();
    } else if (value === "sqr") {
      this.squarRootCalculate();
    } else if (value === "po2") {
      this.powerOfTwo();
    } else if (value === "divbynum") {
      this.oneOverNumber();
    } else if (value === "ce") {
      this.clearScreen();
    } else if (value === "c") {
      this.clearScreen();
    } else if (value === "bcksp") {
      this.backspace();
    } else if (value === "porm") {
      this.plusOrMinus();
    } else {
      this.setState({
        result: this.state.result + value
      });
    }
  };
  //handle equal to operation
  calculateResualt = () => {
    try {
      this.setState({
        result: (math.eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  //square root of a number
  squarRootCalculate = () => {
    if (this.state.result === "") {
      return;
    }
    this.setState({
      result: Math.sqrt(this.state.result)
    });
  };

  //number to the power of 2
  powerOfTwo = () => {
    if (this.state.result === "") {
      return;
    }
    this.setState({
      result: Math.pow(this.state.result, 2)
    });
  };

  //one over number
  oneOverNumber = () => {
    try {
      this.setState({
        result: 1 / this.state.result
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  //plus or minus
  plusOrMinus = () => {
    if (this.state.result === "") {
      return;
    }

    if (this.state.result === "0") {
      return;
    }

    this.setState({
      result: -1 * this.state.result
    });
  };

  //precentage calculation
  pecntCalculate = () => {
    if (this.state.result === "") {
      return;
    }
    this.setState({
      result: this.state.result / 100
    });
  };

  //backspace
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  clearScreen = () => {
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <div>
        <Navbar value="Standard" />
        <div className="standard">
          <div className="calc-wrapper">
            <Input placeholder="0" result={this.state.result} />
            <div className="row">
              <Button value="%" name="%" onClick={this.onClick} />
              <Button value="sqr" name="√" onClick={this.onClick} />
              <Button value="po2" name=" x2" onClick={this.onClick} />
              <Button value="divbynum" name="1/x" onClick={this.onClick} />
            </div>
            <div className="row">
              <Button value="ce" name="CE" onClick={this.onClick} />
              <Button value="c" name="C" onClick={this.onClick} />
              <Button value="bcksp" name="⌫" onClick={this.onClick} />
              <Button value="/" name="÷" onClick={this.onClick} />
            </div>
            <div className="row">
              <Button value="7" name="7" onClick={this.onClick} />
              <Button value="8" name="8" onClick={this.onClick} />
              <Button value="9" name="9" onClick={this.onClick} />
              <Button value="*" name="X" onClick={this.onClick} />
            </div>
            <div className="row">
              <Button value="4" name="4" onClick={this.onClick} />
              <Button value="5" name="5" onClick={this.onClick} />
              <Button value="6" name="6" onClick={this.onClick} />
              <Button value="-" name="-" onClick={this.onClick} />
            </div>
            <div className="row">
              <Button value="1" name="1" onClick={this.onClick} />
              <Button value="2" name="2" onClick={this.onClick} />
              <Button value="3" name="3" onClick={this.onClick} />
              <Button value="+" name="+" onClick={this.onClick} />
            </div>
            <div className="row">
              <Button value="porm" name="±" onClick={this.onClick} />
              <Button value="0" name="0" onClick={this.onClick} />
              <Button value="." name="." onClick={this.onClick} />
              <Button value="=" name="=" onClick={this.onClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Standard;
