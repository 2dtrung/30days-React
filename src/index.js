import React from 'react'
import ReactDOM from 'react-dom'

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
const HexaColor = () => {
  const bgColor = hexaColor()
  const style = {
    backgroundColor: bgColor,
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    height: '5rem',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: 'white'
  }
  return (
    <div id='box' style={style}>{bgColor}</div>
  )
}


const HexaWrap = () => (
  <div className='wrapper'>
    <HexaColor/>
  </div>
)

const App = () => {
  return (
    <div>
      <HexaWrap/>
      <HexaWrap/>
      <HexaWrap/>
      <HexaWrap/>
      <HexaWrap/>
    </div>
  );
}
const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)