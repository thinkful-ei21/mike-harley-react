import React from 'react';
import './App.css';
import carModels from './car-models.json';
import Dropdown from './Dropdown';
import Submit from './Submit';
import Output from './Output';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: carModels
    }
  }

  getMakes(data) {
    return data.map(auto => auto.title);
  }


  render() {


    return (
      <div className="App">
        <Dropdown cars={this.getMakes(this.state.cars)}/>
        <Dropdown />
        {/* <Submit />
        <Output /> */}
      </div>
    );
  }
}
