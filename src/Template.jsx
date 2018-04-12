import React from 'react';
import Form from './Form.jsx';
import Favicon from 'react-favicon';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

});

class Template extends React.Component
{
  render() {
    return (
      <div className="wrapper">
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
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <span><b>Total:</b> {this.props.list.length}</span>
                  <span><b>Completed:</b> {this.props.completedTasks}</span>
                </div>
              </div>
            </div>
            <ol className="list-group">
              {this.props.list.map((item) => {
                return <li className="list-group-item d-flex justify-content-between align-items-center" data-item={item} key={item}>
                {item}
                <a className="" href="#" onClick={this.props.removeTask}>
                 <span className="label label-danger pull-right">
                   <FontAwesomeIcon icon="times" size="lg"/>
                </span>
                </a>
                <a className="" href="#" onClick={this.props.completeTask}>
                 <span className="label label-success pull-right">
                   <FontAwesomeIcon icon="check-square" size="lg"/>
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
                      resetList={this.props.resetList}
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
