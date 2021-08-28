import React from 'react';
import ReactDOM from 'react-dom';

function isEven(num) {
  if (num%2 === 0)
    return true
  else return false
}
function isPrime(num) {
  if (num <= 1) return false
  for(var n = 2; n <= num/2;n++) {
    if(num%n === 0)
      return false
  }
  return true
}

const listNum = () => {
  let list = [];
  for (var i =0; i <= 31; i++) {
    if (isPrime(i)) {
      list.push({value: i,color: 'rgb(253,94,83)'})
    }
    else if (isEven(i)) list.push({value: i,color: 'rgb(33,191,115)'})
    else list.push({value: i,color: 'rgb(253,219,58)'})
  }
  return list;
}

const NumberContainer = ({number:{value,color}}) => {
  const style = {
    backgroundColor: color
  }
  return (
    <div className='number-container' style={style}>
      <p>{value}</p>
    </div>
  );
}

const TableNumber = ({listNum}) => {
  const listNumber = listNum.map(number => <NumberContainer key={number.value} number={number}/>)
  return (
    <div className="table-number">
      {listNumber}
    </div>
  );
}

const Intro = () => {
  return (
    <div className='intro-part'>
      <h1>30 Days Of React</h1>
      <h2>Number Generator</h2>
    </div>
  );
}

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <Intro />
      <TableNumber listNum={listNum()}/>
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