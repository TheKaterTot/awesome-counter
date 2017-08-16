import React, { Component } from 'react'
import logo from './logo.svg'
import ActionButton from './ActionButton.jsx'
import './App.css'


class App extends Component {
  handleClick() {
    alert("Beep")
  }
  render () {
    return (
      <div className="App">
        <ActionButton
          text="Submit or be Destroyed"
          onClick={this.handleClick} />
      </div>
    )
  }
}

export default App
