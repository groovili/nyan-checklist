import React from 'react';
import Form from './Form.jsx';
import Favicon from 'react-favicon';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';
import { StyleSheet, css } from 'aphrodite';
import appStyles from '../styles/styles.js';
import moment from 'moment';
import { timeFormat } from '../config/config.js';
import ReactTooltip from 'react-tooltip'
import CompleteModal from './CompleteModal.jsx';

class Template extends React.Component
{
  render() {
    let tasksList = this.props.list;
    let rows = [];

    for (var [key, value] of tasksList.entries()) {
      let duration = moment.duration(value[1], 'minutes');

      rows.push(<li className="list-group-item d-flex justify-content-between align-items-center" data-item={key} key={key}>
      <ReactTooltip />
      <b>{value[0]}</b>&nbsp;
      <div className="pull-right">
      <span data-tip="Estimated time" className="label label-info label-time"><FontAwesomeIcon icon="hourglass-half"/>&nbsp;{duration.asHours()}</span>
      <span className={css(appStyles.dividerBig)}></span>
        <a data-tip="Mark completed" className="action-link" href="#" onClick={this.props.completeTask}>
         <span className="label label-success">
           <FontAwesomeIcon icon="check" size="lg"/>
        </span>
        </a>
        <span className={css(appStyles.dividerSmall)}></span>
        <a data-tip="Remove" className="action-link" href="#" onClick={this.props.removeTask}>
         <span className="label label-danger">
           <FontAwesomeIcon icon="times" size="lg"/>
        </span>
        </a>
      </div>
    </li>);
    }

    let completeListRows = [];
    let completedList = this.props.completedList;

    if(this.props.completeListVisible){
      for (var [key, value] of completedList.entries()) {
        let duration = moment.duration(value[1], 'minutes');

        completeListRows.push(<li className="list-group-item disabled d-flex justify-content-between align-items-center" data-item={key} key={key}>
        <ReactTooltip />
        <b>{value[0]}</b>&nbsp;
        <div className="pull-right">
        <span data-tip="Estimated time" className="label label-info label-time"><FontAwesomeIcon icon="hourglass-half"/>&nbsp;{duration.asHours()}</span>
        </div>
      </li>);
      }
    }

    let totalEstimatedCurrent = moment.duration(this.props.totalEstimatedCurrent, 'hours');
    let totalEstimatedCompleted = moment.duration(this.props.totalEstimatedCompleted, 'hours');

    return (
      <div className={css(appStyles.wrapper)}>
      <ReactTooltip />
      <div className="container">
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/react.ico" />
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="well">
              <h1>{this.props.name}</h1>
              <dl>
                <dt>{this.props.subtitle}</dt>
              </dl>
              <CompleteModal
                {...this.props}
                modalIsOpen={this.props.modalIsOpen}
                openModal={this.props.openModal}
                afterOpenModal={this.props.afterOpenModal}
                closeModal={this.props.closeModal}
              />
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <span data-tip="New tasks count" className="label label-primary"><FontAwesomeIcon icon="list" /> &nbsp;{this.props.list.size}</span>
                  <span className={css(appStyles.dividerSmall)}></span>
                  <span data-tip="Completed tasks count" className="label label-success"><FontAwesomeIcon icon="check-square" size="lg"/> &nbsp;{this.props.completedTasks}</span>
                  <span className={css(appStyles.dividerSmall)}></span>
                  <span data-tip="Estimated time for new tasks" className="label label-warning"><FontAwesomeIcon  icon="hourglass-half"/>&nbsp;{totalEstimatedCurrent.asHours()} hours</span>
                  <span className={css(appStyles.dividerSmall)}></span>
                  <span data-tip="Estimated time of completed tasks" className="label label-info"><FontAwesomeIcon  icon="hourglass-half"/>&nbsp;{totalEstimatedCompleted.asHours()} hours</span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-right">
                    <button data-tip="Show completed list" className="btn btn-default btn-sm" name="reset" type="button" onClick={this.props.showCompletedList} ><FontAwesomeIcon icon="history" /> </button>
                    <span className={css(appStyles.dividerSmall)}></span>
                    <button data-tip="Reset all data" className="btn btn-danger btn-sm" name="reset" type="button" onClick={this.props.resetList} ><FontAwesomeIcon icon="power-off" /> </button>
                </div>
              </div>
            </div>
            <ol className="list-group">
              {rows}
            </ol>
            <ol className="list-group">
              {completeListRows}
            </ol>
            <div className="panel-footer">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <Form
                      {...this.props}
                      submitForm={this.props.submitForm}
                      inputChange={this.props.inputChange}
                      form={this.props.form}
                    />
                  </div>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Template;
