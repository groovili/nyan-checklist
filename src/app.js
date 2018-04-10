import React from 'react';
import { hot } from 'react-hot-loader';
import Template from './Template.js';

class Render extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  componentDidMount(){
    setInterval(() => {this.setState({ counter: this.state.counter + 1 })}, 1000);
  }
  render() {
    return <Template {...this.props} counter={this.state.counter} />;
  }
}

export default hot(module)(Render);
