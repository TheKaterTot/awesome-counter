import React, { Component } from 'react'
import logo from './logo.svg'
import ActionButton from './ActionButton.jsx'
import './App.css'


class App extends Component {
  render () {
    return (
      <div className="App">
        <ActionButton text="Submit or be Destroyed" />
      </div>
    )
  }
}

export default App
