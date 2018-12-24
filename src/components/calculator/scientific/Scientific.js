import React, { Component } from "react";
import Navbar from "../../navbar/Navbar";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import * as math from "mathjs";
import "./Scientific.css";

export class Scientific extends Component {
  state = {
    result: "",
    isUpArrowClicked: false
  };

  onClick = value => {
    switch (value) {
      //calculate the resualt
      case "=":
        try {
          this.setState({
            result: (math.eval(this.state.result) || "") + ""
          });
        } catch (e) {
          this.setState({
            result: "error"
          });
        }
        break;

      //calculate the percentage
      case "%":
        if (this.state.result === "") {
          return;
        }
        this.setState({
          result: this.state.result / 100
        });
        break;

      //calculate the square root
      case "sqr":
        if (this.state.result === "") {
          return;
        }
        this.setState({
          result: Math.sqrt(this.state.result)
        });
        break;

      //calculate the power of 2
      case "po2":
        if (this.state.result === "") {
          return;
        }
        this.setState({
          result: Math.pow(this.state.result, 2)
        });
        break;

      //calculate  one divide by a number
      case "divbynum":
        try {
          this.setState({
            result: 1 / this.state.result
          });
        } catch (e) {
          this.setState({
            result: "error"
          });
        }
        break;

      //clear  the screen
      case "c":
        this.setState({
          result: ""
        });
        break;

      //clear  the resualt screen
      case "ce":
        this.setState({
          result: ""
        });
        break;

      //do back space
      case "bcksp":
        if (this.state.result === "") return;
        try {
          this.setState({
            result: this.state.result.slice(0, -1)
          });
        } catch (e) {
          this.setState({
            result: "error"
          });
        }
        break;

      //change the sign plus or minus
      case "porm":
        if (this.state.result === "" || this.state.result === "0") {
          return;
        }
        this.setState({
          result: -1 * this.state.result
        });
        break;

      //calculate the factorial of a number
      case "nf":
        this.setState({
          result: this.nfactorial()
        });
        break;

      //show or hide the buttons
      case "upArrow":
        this.setState({
          isUpArrowClicked: !this.state.isUpArrowClicked
        });
        break;

      //calculate  10 the power of a number
      case "tenPowx":
        this.setState({
          result: Math.pow(10, this.state.result)
        });
        break;

      //calculate the base 10 logarithm  of a number
      case "log":
        this.setState({
          result: Math.log10(this.state.result)
        });
        break;

      //calculate sine of a number
      case "sin":
        this.setState({
          result: Math.sin(this.state.result)
        });
        break;

      //calculate cosine of a number
      case "cos":
        this.setState({
          result: Math.cos(this.state.result)
        });
        break;

      //calculate tan of a number
      case "tan":
        this.setState({
          result: Math.tan(this.state.result)
        });
        break;

      //calculate the inverse of a number
      case "oneOverx":
        this.setState({
          result: 1 / this.state.result
        });
        break;

      //calculate the base e to the power of a number
      case "epx":
        this.setState({
          result: Math.pow(Math.E, this.state.result)
        });
        break;

      //calculate natural logarithm  of a number
      case "ln":
        this.setState({
          result: Math.log(this.state.result)
        });
        break;

      //calculate the sine inverse  of a number
      case "sinInv":
        this.setState({
          result: Math.asin(this.state.result)
        });
        break;

      //calculate the cosine inverse a number
      case "cosInv":
        this.setState({
          result: Math.acosh(this.state.result)
        });
        break;

      //calculate the tan inverse a number
      case "tanInv":
        this.setState({
          result: Math.atanh(this.state.result)
        });
        break;

      //calculate the ceil value a number
      case "ceil":
        this.setState({
          result: Math.ceil(this.state.result)
        });
        break;

      //calculate the floor a number
      case "floor":
        this.setState({
          result: Math.floor(this.state.result)
        });
        break;

      //calculate mod a number
      case "log2":
        this.setState({
          result: Math.log2(this.state.result)
        });
        break;

      //calculate the resualt of  numbers
      default:
        this.setState({
          result: this.state.result + value
        });
        break;
    }
  };
  nfactorial = () => {
    let val = this.state.result;
    let value = this.state.result;
    if (this.state.result === "") {
      return;
    }

    // If the number is less than 0, reject it.
    if (value < 0) return -1;
    // If the number is 0, its factorial is 1.
    else if (value === "0" || value === "1") return 1;

    //  Create the WHILE loop
    while (value > "1") {
      value--; // decrementation by 1 at each iteration
      val = val * value; // or result *= num;
    }
    return val;
  };

  render() {
    const arrowDisplay = this.state.isUpArrowClicked ? (
      <div>
        <div className="row">
          <Button value="po3" name=" x^3" onClick={this.onClick} />
          <Button value="xpy" name="x^y" onClick={this.onClick} />
          <Button value="sinInv" name="sin-1" onClick={this.onClick} />
          <Button value="cosInv" name="cos-1" onClick={this.onClick} />
          <Button value="tanInv" name="tan-1" onClick={this.onClick} />
        </div>
        <div className="row">
          <Button value="oneOverx" name=" 1/x" onClick={this.onClick} />
          <Button value="epx" name="e^x" onClick={this.onClick} />
          <Button value="ln" name="ln" onClick={this.onClick} />
          <Button value="ceil" name="ceil" onClick={this.onClick} />
          <Button value="floor" name="floor" onClick={this.onClick} />
        </div>
      </div>
    ) : (
      <div>
        <div className="row">
          <Button value="po2" name=" x^2" onClick={this.onClick} />
          <Button value="^" name="x^y" onClick={this.onClick} />
          <Button value="sin" name="sin" onClick={this.onClick} />
          <Button value="cos" name="cos" onClick={this.onClick} />
          <Button value="tan" name="tan" onClick={this.onClick} />
        </div>
        <div className="row">
          <Button value="sqr" name="√" onClick={this.onClick} />
          <Button value="tenPowx" name=" 10^x" onClick={this.onClick} />
          <Button value="log" name="log" onClick={this.onClick} />
          <Button value="log2" name="log2" onClick={this.onClick} />
          <Button value={Math.E} name="e" onClick={this.onClick} />
        </div>
      </div>
    );
    return (
      <div>
        <Navbar value="Scientific" />
        <div className="scientific">
          <div className="calc-wrapper">
            <Input result={this.state.result} />
            {arrowDisplay}
            <div className="row">
              <Button value="upArrow" name="&#8593;" onClick={this.onClick} />
              <Button value="ce" name="CE" onClick={this.onClick} />
              <Button value="c" name="C" onClick={this.onClick} />
              <Button value="bcksp" name="⌫" onClick={this.onClick} />
              <Button value="/" name="÷" onClick={this.onClick} />
            </div>

            <div className="row">
              <Button value={Math.PI} name="π" onClick={this.onClick} />
              <Button value="7" name="7" onClick={this.onClick} />
              <Button value="8" name="8" onClick={this.onClick} />
              <Button value="9" name="9" onClick={this.onClick} />
              <Button value="*" name="X" onClick={this.onClick} />
            </div>

            <div className="row">
              <Button value="nf" name="n!" onClick={this.onClick} />
              <Button value="4" name="4" onClick={this.onClick} />
              <Button value="5" name="5" onClick={this.onClick} />
              <Button value="6" name="6" onClick={this.onClick} />
              <Button value="-" name="-" onClick={this.onClick} />
            </div>

            <div className="row">
              <Button value="porm" name="±" onClick={this.onClick} />
              <Button value="1" name="1" onClick={this.onClick} />
              <Button value="2" name="2" onClick={this.onClick} />
              <Button value="3" name="3" onClick={this.onClick} />
              <Button value="+" name="+" onClick={this.onClick} />
            </div>

            <div className="row">
              <Button value="(" name="(" onClick={this.onClick} />
              <Button value=")" name=")" onClick={this.onClick} />
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

export default Scientific;
