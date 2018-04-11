import React from 'react';
import { hot } from 'react-hot-loader';
import Template from './Template.jsx';

class Render extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      list: [],
    };

    this.inputChange = this.inputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetList = this.resetList.bind(this);
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

        let childInputs = event.target.parentElement.getElementsByTagName("input");
        for(var i=0; i < childInputs.length; i++){
          childInputs[i].value = "";
        }
      }
    }
  }

  resetList(event) {
    event.preventDefault();
    this.setState({
      list: []
    })
  }

  render() {
    return <Template
      {...this.props}
      inputChange={this.inputChange}
      submitForm={this.submitForm}
      resetList={this.resetList}
      list={this.state.list}
    />;
  }
}

export default hot(module)(Render);
