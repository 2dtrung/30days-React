import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'

class App extends React.Component {
  handleClick = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }
  render() {
    return (
      <a href='#' onClick={this.handleClick}>
        Click me
      </a>
    )
  }
}

export default App