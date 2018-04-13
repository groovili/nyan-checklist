import React from 'react';
import { hot } from 'react-hot-loader';
import Template from './components/Template.jsx';

class Render extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      completedTasks: 0,
      list: [],
      form: {
        formClass: "",
        task: "",
      },
    };

    this.inputChange = this.inputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetList = this.resetList.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this._deleteFromList = this._deleteFromList.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  inputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      form:{
        [name]: value,
      }
    });
  }

  submitForm(event) {
    event.preventDefault();

    let inputValue = this.state.form.task;
    let tasksList = [];

    if(inputValue.length > 0){
      if(!this.state.list.includes(inputValue)){
        this.setState({
          list: tasksList.concat(this.state.list, inputValue),
          form: {
            formClass: "",
            task: "",
          },
        });
      }
      else{
        this.setState({
          form: {
            task: this.state.form.task,
            formClass: "invalid-input"
          }
        });
      }
    }
    else{
      this.setState({
        form: {
          task: "",
          formClass: "invalid-input"
        }
      });
    }
  }

  resetList(event) {
    event.preventDefault();
    this.setState({
      list: [],
      completedTasks: 0,
      form: {
        formClass: "",
        task: "",
      }
    })
  }

  _deleteFromList(completeTask){
    let tasksList = this.state.list;
    let completedIndex = tasksList.indexOf(completeTask);

    if (completedIndex > -1) {
      tasksList.splice(completedIndex, 1);

      return tasksList;
    }

    return false;
  }

  completeTask(event) {
    event.preventDefault();
    let completeTask = event.target.closest("li").getAttribute("data-item");

    if(this.state.list.includes(completeTask)){
      let list = this._deleteFromList(completeTask, this);

      if(list !== false){
        this.setState({
          completedTasks: this.state.completedTasks + 1
        });

        this.setState({
          list: list
        });
      }
    }
  }

  removeTask(event){
    event.preventDefault();
    let completeTask = event.target.closest("li").getAttribute("data-item");

    if(this.state.list.includes(completeTask)){
      let list = this._deleteFromList(completeTask, this);

      if(list !== false){
        this.setState({
          list: list
        });
      }
    }
  }

  render() {
    return <Template
      {...this.props}
      inputChange={this.inputChange}
      submitForm={this.submitForm}
      resetList={this.resetList}
      list={this.state.list}
      completeTask={this.completeTask}
      completedTasks={this.state.completedTasks}
      removeTask={this.removeTask}
      form={this.state.form}
    />;
  }
}

export default hot(module)(Render);
