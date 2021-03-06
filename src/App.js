import React, { Component } from "react";
import "./App.css";
import axios from "axios";
var NumberFormat = require("react-number-format");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD,GBP,EUR"
      )
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  }

  render() {
    return (
      <div className="App">
        <h1> Cryptocurrency Price Checker </h1>
        {Object.keys(this.state.cryptos).map(key => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right">
              <NumberFormat
                value={this.state.cryptos[key].USD}
                displayType={"text"}
                decimalPrecision={2}
                thousandSeparator={true}
                prefix={"$ "}
              />
            </span>{" "}
            <br />
            <span className="right">
              <NumberFormat
                value={this.state.cryptos[key].GBP}
                displayType={"text"}
                decimalPrecision={2}
                thousandSeparator={true}
                prefix={"£ "}
              />
            </span>{" "}
            <br />
            <span className="right">
              <NumberFormat
                value={this.state.cryptos[key].EUR}
                displayType={"text"}
                decimalPrecision={2}
                thousandSeparator={true}
                prefix={"€ "}
              />
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

/**
 <span className="right">{this.state.cryptos[key].GBP}</span>
  <span className="right">{this.state.cryptos[key].EUR}</span>
         {this.state.cryptos[key].GBP}
 */
