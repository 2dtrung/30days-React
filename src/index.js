import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    topMargin: '',
    leftMargin: '',
    rightMargin: '',
  }
  // triggered whenever the mouse enter
  handleMouseEnter = () => {
    let top = Math.floor(Math.random() * 600) + 'px'
    let left = Math.floor(Math.random() * 800) + 'px'
    let right = Math.floor(Math.random() * 600) + 'px'
    this.setState({ topMargin: top, leftMargin: left, rightMargin: right})

  }
  render() {
    return (
      <div onMouseEnter={this.handleMouseEnter} style={{width: '1440px', height: '1270px'}}>
        <div className='box' style={{backgroundColor: 'rgb(94,220,251)', width: '300px', textAlign: 'center', height: '60px', marginTop: this.state.topMargin, marginLeft: this.state.leftMargin, marginRight: this.state.rightMargin}}>
            <h2 style={{paddingTop: '10px', textShadow: '1px 1px pink'}}> 30 Days Of React</h2>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)