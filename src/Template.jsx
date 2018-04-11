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
            <ol className="list-group">
              {this.props.list.map((item) => {return <li className="list-group-item" key={item}>{item}</li>;})}
            </ol>
            <div className="panel-footer">
                <Form {...this.props} submitForm={this.props.submitForm} inputChange={this.props.inputChange}/>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
