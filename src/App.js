import React from 'react';
import './index.css';
import carModels from './car-models.json';
import Dropdown from './Dropdown';
import Output from './Output';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: carModels,
      make: '',
      model: ''
    };
  }

  getMakes(data) {
    return data.map(auto => <option value={`${auto.title}`} key={auto.title}>{auto.title}</option>);
  }

  getModels(make, data) {
    if (make) {
      const found = data.find(element => element.title === make);
      return found.models.map(model => <option value={`${model.title}`} key={model.title}>{model.title}</option>);
    } else {
      return '';
    }
  }

  setMake(make) {
    this.setState({
      make,
      model:''
    });
  }

  setModel(model) {
    this.setState({model});
  }


  render() {


    return (
      <div className="app">
      <h1>Find A Car</h1>
        <Dropdown cars={this.getMakes(this.state.cars)} pickValue={value=>this.setMake(value)} selectType={'make'}/>
        <Dropdown cars={this.getModels(this.state.make, this.state.cars)} pickValue={value=>this.setModel(value)} selectType={'model'}/>
        <Output make={this.state.make} model={this.state.model}/>
      </div>
    );
  }
}
