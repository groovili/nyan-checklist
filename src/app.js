import React from 'react';
import { hot } from 'react-hot-loader';
import Template from './Template.jsx';

class Render extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.resetCounter = this.resetCounter.bind(this);
  }

  componentDidMount() {
    setInterval(() => {this.setState({ counter: this.state.counter + 1 })}, 1000);
  }

  resetCounter() {
    this.setState({counter: 0});
  }
  
  render() {
    return <Template {...this.props} counter={this.state.counter} resetCounter={this.resetCounter} />;
  }
}

export default hot(module)(Render);
