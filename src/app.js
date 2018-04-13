import React from 'react';
import { hot } from 'react-hot-loader';
import Template from './components/Template.jsx';
import Moment from 'moment';

class Render extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      completedTasks: 0,
      list: new Map(),
      form: {
        formClass: "",
        task: "",
        date: Moment().toString(),
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
    let form = this.state.form;

    if(!(event instanceof Moment)){
      const target = event.target;
      const value = target.value;
      const name = target.name;

      form[name] = value;
      this.setState({
        form: form,
      });
    }else{
      form.date = event.toString();
      this.setState({
        form: form
      });
    }
  }

  submitForm(event) {
    event.preventDefault();

    let inputValue = this.state.form.task;
    let dateValue = this.state.form.date;
    let form = this.state.form;

    if((inputValue && dateValue) && (inputValue.length > 0 && dateValue.length > 0)){
      if(!this.state.list.has(inputValue)){
        form.task = "";
        form.date = undefined;
        form.formClass = "";

        let map = this.state.list;
        map.set(inputValue, [inputValue, dateValue]);

        this.setState({
          list: map,
          form: form,
        });
      }
      else{
        form.formClass = "invalid-input";

        this.setState({
          form: form,
        });
      }
    }
    else{
      form.task = "";
      form.date = undefined;

      form.formClass = "invalid-input";

      this.setState({
        form: form,
      });
    }
  }

  resetList(event) {
    event.preventDefault();

    let form = this.state.form;
    form.task = "";
    form.date = undefined;
    form.formClass = "";

    this.setState({
      list: new Map(),
      completedTasks: 0,
      form: form,
    });
  }

  _deleteFromList(completeTask){
    let tasksList = this.state.list;

    if (tasksList.has(completeTask)) {
      tasksList.delete(completeTask);

      return tasksList;
    }

    return false;
  }

  completeTask(event) {
    event.preventDefault();
    let completeTask = event.target.closest("li").getAttribute("data-item");

    if(this.state.list.has(completeTask)){
      let list = this._deleteFromList(completeTask);

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

    if(this.state.list.has(completeTask)){
      let list = this._deleteFromList(completeTask);

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
