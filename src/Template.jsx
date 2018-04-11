import React from 'react';
import Form from './Form.jsx';
import Favicon from 'react-favicon';

class Template extends React.Component
{
  render() {
    return (
      <div>
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/react.ico" />
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.subtitle}</p>
          <p>You are watching at this crap for {this.props.counter} seconds.</p>
          <p><button onClick={this.props.resetCounter}>Reset counter</button></p>
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
