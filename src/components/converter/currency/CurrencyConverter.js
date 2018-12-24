import React, { Component } from "react";
import CountryCodes from "./CountryCodes";
import Navbar from "../../navbar/Navbar";
import "./CurrencyConverter.css";

export class CurrencyConverter extends Component {
  state = {
    currency: {},
    date: new Date(),
    from: "USD",
    to: "SEK",
    amount: " 1",
    result: ""
  };

  componentDidMount() {
    fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        this.setState({ currency: data.date });
        this.setState({ currency: data.rates });
      });
  }

  calculateCurrency = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calcCurrency = () => {
    const { to, from, currency } = this.state;
    const amount = this.state.amount;

    let oneUnit = currency[to] / currency[from];
    let nValue = amount * oneUnit;
    return nValue.toString();
  };

  onChange = e => {
    this.setState({ amount: e.target.value });
  };

  render() {
    const { to, from, currency, date } = this.state;
    let options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return (
      <div>
        <Navbar value="Currency Converter" />

        <div className="currency">
          <CountryCodes
            calculateCurrency={this.calculateCurrency}
            onChange={this.onChange}
            result={this.calcCurrency()}
          />

          <div className="dateDisplay">
            1 {from} = {(currency[to] / currency[from]).toFixed(4)} {to}
            <br />
            updated {date.toLocaleString("en-us", options)}
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
