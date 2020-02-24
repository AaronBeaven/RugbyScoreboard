import React, { Component } from 'react'
import Timer from './Components/timer'
import Team from './Components/Teams'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer/>
      <Team name="Danneh" />
      <Team name="Heaven With A B" />
        
    </div>
        

    )
  }
}



