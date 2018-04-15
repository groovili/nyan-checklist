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
      totalSpentCompleted: 0,
      list: new Map(),
      completedList: new Map(),
      form: this._formSetDefaults(),
      modalForm: this._modalFormSetDefaults(),
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
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalFormInputChange = this.modalFormInputChange.bind(this);
    this.modalFormSubmit = this.modalFormSubmit.bind(this);
    this._modalFormSetDefaults = this._modalFormSetDefaults.bind(this);
    this._extractTimeDiff = this._extractTimeDiff.bind(this);
  }

  _calculateCurrentEstimation(list, index = 1){
    let totalEstimatedCurrent = Moment.duration(0, 'minutes');
    for (var [key, value] of list.entries()) {
      totalEstimatedCurrent.add(value[index], 'minutes');
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

  _deleteFromList(completeTask, save = false, spentTime = false){
    let tasksList = this.state.list;

    if (tasksList.has(completeTask)) {
      if(save){
        let completedElement = tasksList.get(completeTask);
        completedElement[2] = spentTime;
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

  _formSetDefaults(){
    return {
      formClass: "",
      task: "",
      date: Moment().hour(0).minute(30).toString(),
    };
  }

  _modalFormSetDefaults(){
    return {
      formClass: "",
      elementKey: "",
      date: Moment().hour(0).minute(30).toString(),
    };
  }

  _extractTimeDiff(date){
    let dateObj = Moment(date);
    let dateStart = dateObj.clone().startOf('day');

    return dateObj.diff(dateStart, 'minutes');
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
      if(event !== null){
        form.date = event.toString();
      }
      else{
        form.date = "";
      }

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
        let diffMinutes = this._extractTimeDiff(form.date);

        let map = this.state.list;
        map.set(form.task, [form.task, diffMinutes]);

        let totalEstimatedCurrent = this._calculateCurrentEstimation(map);

        this.setState({
          list: map,
          form: this._formSetDefaults(),
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

    this.setState({
      list: new Map(),
      completedList: new Map(),
      completedTasks: 0,
      form: this._formSetDefaults(),
      totalEstimatedCurrent: 0,
      totalEstimatedCompleted: 0,
      totalSpentCompleted: 0,
      completeListVisible: false,
      modalIsOpen: false,
    });
  }

  completeTask(event) {
    event.preventDefault();
    let completeTask = event.target.closest("li").getAttribute("data-item");

    if(this.state.list.has(completeTask)){
      let modalForm = this.state.modalForm;
      modalForm.elementKey = completeTask;
      let currentElement = this.state.list.get(completeTask);
      modalForm.date = Moment().hour(0).minute(currentElement[1]).toString();
      this.setState({
        modalIsOpen: true
      });
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

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  modalFormInputChange(input){
    let form = this.state.modalForm;

    if(input !== null){
      form.date = input.toString();
    }
    else{
      form.date = "";
    }
    this.setState({
      modalForm: form
    });
  }

  modalFormSubmit(event){
    event.preventDefault();
    let form = this.state.modalForm;

    if(form.date && form.date.length > 0){
      let completeTask = this.state.modalForm.elementKey;
      let diffMinutes = this._extractTimeDiff(form.date);
      let list = this._deleteFromList(completeTask, true, diffMinutes);

      if(list !== false){
        let totalEstimatedCurrent = this._calculateCurrentEstimation(list);
        let totalEstimatedCompleted = this._calculateCurrentEstimation(this.state.completedList);
        let totalSpentCompleted = this._calculateCurrentEstimation(this.state.completedList, 2);

        this.setState({
          completedTasks: this.state.completedTasks + 1,
          totalEstimatedCurrent: totalEstimatedCurrent,
          totalEstimatedCompleted: totalEstimatedCompleted,
          totalSpentCompleted: totalSpentCompleted,
        });

        this.setState({
          list: list,
          modalIsOpen: false,
          modalForm: this._modalFormSetDefaults(),
        });
      }
    }
    else{
      form.formClass = "invalid-input";
      this.setState({
        modalForm: form
      });
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
      totalEstimatedCurrent={this.state.totalEstimatedCurrent}
      totalEstimatedCompleted={this.state.totalEstimatedCompleted}
      totalSpentCompleted={this.state.totalSpentCompleted}
      removeTask={this.removeTask}
      form={this.state.form}
      completedList={this.state.completedList}
      showCompletedList={this.showCompletedList}
      completeListVisible={this.state.completeListVisible}
      modalIsOpen={this.state.modalIsOpen}
      openModal={this.openModal}
      afterOpenModal={this.afterOpenModal}
      closeModal={this.closeModal}
      modalFormInputChange={this.modalFormInputChange}
      modalFormSubmit={this.modalFormSubmit}
      modalForm={this.state.modalForm}
    />;
  }
}

export default hot(module)(Render);
