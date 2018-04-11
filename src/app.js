import React from 'react';
import { hot } from 'react-hot-loader';
import Template from './Template.jsx';

class Render extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      task: "",
      list: [],
    };

    this.resetCounter = this.resetCounter.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    setInterval(() => {this.setState({ counter: this.state.counter + 1 })}, 1000);
  }

  resetCounter() {
    this.setState({counter: 0});
  }

  inputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitForm(event) {
    event.preventDefault();

    let inputValue = this.state.task;
    let tasksList = [];

    if(inputValue.length > 0){
      if(!this.state.list.includes(inputValue)){
        this.setState({
          list: tasksList.concat(this.state.list, inputValue)
        });

        let childInputs = event.target.getElementsByTagName("input");
        for(var i=0; i < childInputs.length; i++){
          childInputs[i].value = "";
        }
      }
    }
  }

  render() {
    return <Template
      {...this.props}
      counter={this.state.counter}
      resetCounter={this.resetCounter}
      inputChange={this.inputChange}
      submitForm={this.submitForm}
      list={this.state.list}
    />;
  }
}

export default hot(module)(Render);
