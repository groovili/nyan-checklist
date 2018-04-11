import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';

class Form extends React.Component
{
  render(){
    return (
      <form id="task-form" name="task-form" className="form-inline" onSubmit={this.props.submitForm}>
        <div className="form-group">
          <input className="form-control" placeholder="New task" name="task" type="text" onChange={this.props.inputChange}></input>
          <button className="btn btn-info" name="submit" type="submit"><FontAwesomeIcon icon="plus-square" /> Add</button>
        </div>
      </form>
    );
  }
}

export default Form;
