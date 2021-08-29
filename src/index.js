// index.js
import React from "react";
import ReactDOM from "react-dom";
import { countriesData } from "./countries.js";



class App extends React.Component {
  state = {
    flag : countriesData[0].flag,
    name : countriesData[0].name,
    capital : countriesData[0].capital,
    languages : countriesData[0].languages,
    population : countriesData[0].population,
    currency : countriesData[0].currency
  }
  randomCountry = () => {
    let a = countriesData[Math.floor(Math.random() * countriesData.length)]

    this.setState({flag: a.flag, name: a.name, capital: a.capital, languages: a.languages, population: a.population, currency: a.currency})
  }
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="country-flag">
            <img src={this.state.flag} alt="flag"></img>
            <h4>{(this.state.name).toUpperCase()}</h4>
          </div>
          <div className="country-text">
            <h4>
              Capital:{" "}
              <span style={{ fontWeight: "100" }}>
                {this.state.capital}
              </span>
            </h4>
            <h4>
              Languages:{" "}
              <span style={{ fontWeight: "100" }}>
                {this.state.languages}
              </span>
            </h4>
            <h4>
              Population:{" "}
              <span style={{ fontWeight: "100" }}>
                {this.state.population}
              </span>
            </h4>
            <h4>
              Currency:{" "}
              <span style={{ fontWeight: "100" }}>
                {this.state.currency}
              </span>
            </h4>
          </div>
        </div>
        <div className='select-btn'>
          <button class='btn btn-primary' onClick={this.randomCountry}>Select Country</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
