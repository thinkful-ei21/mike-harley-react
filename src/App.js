import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import carModels from './car-models.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: carModels
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.cars[0].value}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
