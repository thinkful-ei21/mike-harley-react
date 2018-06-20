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
      cars: carModels,
      make: '',
      model: ''
    }
  }

  getMakes(data) {
    return data.map(auto => <option value={`${auto.title}`}>{auto.title}</option>);
  }

  getModels(make, data) {
    if (make) {
      const found = data.find(element => element.title === make);
      return found.models.map(model => <option value={`${model.title}`}>{model.title}</option>);
    } else {
      return '';
    }
    
  }

  setMake(make) {
    this.setState({make});
  }

  setModel(model) {
    this.setState({model});
  }


  render() {


    return (
      <div className="App">
        <Dropdown cars={this.getMakes(this.state.cars)} pickValue={value=>this.setMake(value)}/>
        <Dropdown cars={this.getModels(this.state.make, this.state.cars)} pickValue={value=>this.setModel(value)}/>
        {/* <Output /> */}
      </div>
    );
  }
}
