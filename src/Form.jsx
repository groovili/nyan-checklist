import React from 'react';

class Form extends React.Component
{
  render(){
    return (
      <form id="task-form" name="task-form" onSubmit={this.props.submitForm}>
        <input name="task" type="text" onChange={this.props.inputChange}></input>
      <button name="submit" type="submit">Add task</button>
      </form>
    );
  }
}

export default Form;
