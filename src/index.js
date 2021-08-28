import React from 'react';
import ReactDOM from 'react-dom';
const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const Name = ({country}) => {
  return (
    <div className='country-name'>
      <h4>{country.toUpperCase()}</h4>
    </div>
  );
}

const PopulationLength = ({value}) => {
  const style = {
    width: 450*(value/7693165599)
  }
  return (
    <div className='population-length'>
      <div className='graph-length' style={style}>
      </div>
    </div>
  );
}

const Population = ({population}) => {

  return (
    <div className='population'>
      <h4>{population}</h4>
    </div>
  );
}


const Country = ({countryPopulation:{country,population}}) => {
  return (
    <div class='country'>
      <Name country={country}/>
      <PopulationLength value={population}/>
      <Population population={population}/>
    </div>
  );
}

const PopulationGraph = ({countries}) => { 
  const listCountries = countries.map(countryPopulation => <Country countryPopulation={countryPopulation} />)
  return (
    <div className='population-graph'>
      {listCountries}
    </div>
  );
}

const Intro = () => {
  return (
    <div className='intro-part'>
      <h1>30 Days Of React</h1>
      <h2>World Population</h2>
      <p>Ten most populated countries</p>
    </div>
  );
}

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <Intro />
      <PopulationGraph countries={tenHighestPopulation}/>
    </div>
  );
}

const App = () => (
  <div>
    <Wrapper />
  </div>
)
const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)