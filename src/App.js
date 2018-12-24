import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Standard from "./components/calculator/standard/Standard";
import Scientific from "./components/calculator/scientific/Scientific";
import DateCalculation from "./components/calculator/date-calculation/DateCalculation";
import CurrencyConverter from "./components/converter/currency/CurrencyConverter";
import LengthCalculation from "./components/converter/length/LengthCalculation";
import VolumeCalculation from "./components/converter/volume/VolumeCalculation";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Standard} />
          <Route exact path="/scientific" component={Scientific} />
          <Route exact path="/datecalculation" component={DateCalculation} />
          <Route exact path="/currency" component={CurrencyConverter} />
          <Route exact path="/length" component={LengthCalculation} />
          <Route exact path="/volume" component={VolumeCalculation} />
        </div>
      </Router>
    );
  }
}

export default App;
