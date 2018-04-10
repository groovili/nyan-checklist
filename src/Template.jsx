import React from 'react';

class Template extends React.Component
{
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.subtitle}</p>
        <p>You are watching at this crap for {this.props.counter} seconds.</p>
        <p><button onClick={this.props.resetCounter}>Reset counter</button></p>
      </div>
    );
  }
}

export default Template;
