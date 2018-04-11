import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';

class Form extends React.Component
{
  render(){
    return (
      <form id="task-form" name="task-form" onSubmit={this.props.submitForm}>
        <input name="task" type="text" onChange={this.props.inputChange}></input>
        <button name="submit" type="submit"><FontAwesomeIcon icon="plus-square" /> Add task</button>
      </form>
    );
  }
}

export default Form;
