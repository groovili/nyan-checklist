import React from 'react';
import Form from './Form.jsx';
import Favicon from 'react-favicon';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';
import { StyleSheet, css } from 'aphrodite';
import appStyles from '../styles/styles.js';

class Template extends React.Component
{
  render() {
    return (
      <div className={css(appStyles.wrapper)}>
      <div className="container">
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/react.ico" />
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="well">
              <h1>{this.props.name}</h1>
              <dl>
                <dt>{this.props.subtitle}</dt>
              </dl>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <span><b className={css(appStyles.statsLabel)} >Total:</b> <span className="label label-primary">{this.props.list.length}</span></span>
                  <span className={css(appStyles.dividerSmall)}></span>
                  <span><b className={css(appStyles.statsLabel)}>Completed:</b> <span className="label label-success">{this.props.completedTasks}</span></span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <button className="btn btn-danger pull-right btn-sm" name="reset" type="button" onClick={this.props.resetList} ><FontAwesomeIcon icon="history" /> </button>
                </div>
              </div>
            </div>
            <ol className="list-group">
              {this.props.list.map((item) => {
                return <li className="list-group-item d-flex justify-content-between align-items-center" data-item={item} key={item}>
                {item}
                <a className="action-link pull-right" href="#" onClick={this.props.removeTask}>
                 <span className="label label-danger">
                   <FontAwesomeIcon icon="times" size="lg"/>
                </span>
                </a>
                <a className="action-link pull-right" href="#" onClick={this.props.completeTask}>
                 <span className="label label-success">
                   <FontAwesomeIcon icon="check" size="lg"/>
                </span>
                </a>
                </li>;
              })}
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
