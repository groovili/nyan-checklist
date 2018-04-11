import React from 'react';
import Form from './Form.jsx';
import Favicon from 'react-favicon';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';

class Template extends React.Component
{
  render() {
    return (
      <div>
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/react.ico" />
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.subtitle}</p>
        <p>You are watching at this crap for <FontAwesomeIcon icon="clock" spin rotation={180} size="lg"/> <b>{this.props.counter}</b> seconds.</p>
          <p><button onClick={this.props.resetCounter}><FontAwesomeIcon icon="times" /> Reset counter</button></p>
          <div className="task-list">
            <ol>
              {this.props.list.map((item) => {return <li key={item}>{item}</li>;})}
            </ol>
          </div>
          <div>
            <Form {...this.props} submitForm={this.props.submitForm} inputChange={this.props.inputChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
