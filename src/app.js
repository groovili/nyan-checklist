import React from 'react';
import { hot } from 'react-hot-loader';
import Template from './components/Template.jsx';
import Moment from 'moment';
import { timeFormat } from './config/config.js';

class Render extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      completedTasks: 0,
      totalEstimatedCurrent: 0,
      totalEstimatedCompleted: 0,
      list: new Map(),
      completedList: new Map(),
      form: {
        formClass: "",
        task: "",
        date: Moment().hour(0).minute(30).toString(),
      },
      completeListVisible: false,
      modalIsOpen: false,
    };

    this.inputChange = this.inputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetList = this.resetList.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this._deleteFromList = this._deleteFromList.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this._calculateCurrentEstimation = this._calculateCurrentEstimation.bind(this);
    this._validateForm = this._validateForm.bind(this);
    this._setFormError = this._setFormError.bind(this);
    this._formSetDefaults = this._formSetDefaults.bind(this);
    this.showCompletedList = this.showCompletedList.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  _calculateCurrentEstimation(list){
    let totalEstimatedCurrent = Moment.duration(0, 'minutes');
    for (var [key, value] of list.entries()) {
      totalEstimatedCurrent.add(value[1], 'minutes');
    }

    return totalEstimatedCurrent.asHours();
  }

  _validateForm(form){
    let inputValue = form.task;
    let dateValue = form.date;

    if((inputValue && dateValue) && (inputValue.length > 0 && dateValue.length > 0)){
      return true;
    }

    return false;
  }

  _setFormError(form){
    form.formClass = "invalid-input";
    this.setState({
      form: form,
    });
  }

  _deleteFromList(completeTask, save = false){
    let tasksList = this.state.list;

    if (tasksList.has(completeTask)) {
      if(save){
        let completedElement = tasksList.get(completeTask);
        let completedList = this.state.completedList;
        completedList.set(completeTask, completedElement);

        this.setState({
          completedList: completedList,
        });
      }

      tasksList.delete(completeTask);

      return tasksList;
    }

    return false;
  }

  _formSetDefaults(form){
    form.task = "";
    form.date = Moment().hour(0).minute(30).toString();
    form.formClass = "";

    return form;
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
    }
    else{
      form.date = event.toString();
      this.setState({
        form: form
      });
    }
  }

  submitForm(event) {
    event.preventDefault();
    let form = this.state.form;

    if(this._validateForm(form)){
      if(!this.state.list.has(form.task)){
        let dateObj = Moment(form.date);
        let dateStart = dateObj.clone().startOf('day');
        let diffMinutes = dateObj.diff(dateStart, 'minutes');

        let map = this.state.list;
        map.set(form.task, [form.task, diffMinutes]);

        let totalEstimatedCurrent = this._calculateCurrentEstimation(map);

        form = this._formSetDefaults(form);

        this.setState({
          list: map,
          form: form,
          totalEstimatedCurrent: totalEstimatedCurrent,
        });
      }
      else{
        this._setFormError(form);
      }
    }
    else{
      this._setFormError(form);
    }
  }

  resetList(event) {
    event.preventDefault();

    let form = this.state.form;
    form = this._formSetDefaults(form);

    this.setState({
      list: new Map(),
      completedList: new Map(),
      completedTasks: 0,
      form: form,
      totalEstimatedCurrent: 0,
      totalEstimatedCompleted: 0,
      completeListVisible: false,
      modalIsOpen: false,
    });
  }

  completeTask(event) {
    event.preventDefault();
    let completeTask = event.target.closest("li").getAttribute("data-item");

    if(this.state.list.has(completeTask)){
      let list = this._deleteFromList(completeTask, true);

      if(list !== false){
        let totalEstimatedCurrent = this._calculateCurrentEstimation(list);
        let totalEstimatedCompleted = this._calculateCurrentEstimation(this.state.completedList);

        this.setState({
          completedTasks: this.state.completedTasks + 1,
          totalEstimatedCurrent: totalEstimatedCurrent,
          totalEstimatedCompleted: totalEstimatedCompleted,
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
        let totalEstimatedCurrent = this._calculateCurrentEstimation(list);

        this.setState({
          list: list,
          totalEstimatedCurrent: totalEstimatedCurrent,
        });
      }
    }
  }

  showCompletedList(event){
    event.preventDefault();

    let completeListVisible = !this.state.completeListVisible;
    this.setState({
      completeListVisible: completeListVisible,
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
      totalEstimatedCurrent={this.state.totalEstimatedCurrent}
      totalEstimatedCompleted={this.state.totalEstimatedCompleted}
      removeTask={this.removeTask}
      form={this.state.form}
      completedList={this.state.completedList}
      showCompletedList={this.showCompletedList}
      completeListVisible={this.state.completeListVisible}
      modalIsOpen={this.state.modalIsOpen}
      openModal={this.openModal}
      afterOpenModal={this.afterOpenModal}
      closeModal={this.closeModal}
    />;
  }
}

export default hot(module)(Render);
