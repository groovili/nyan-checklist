import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';

class Form extends React.Component
{
  render(){
    return (
      <form id="task-form" name="task-form" className="form-inline">
        <div className="form-group" onSubmit={(event) => {event.preventDefault();}}>
          <input className="form-control" placeholder="New task" name="task" type="text" onChange={this.props.inputChange}></input>
          <button className="btn btn-info b-ml" name="submit" type="submit" onClick={this.props.submitForm} ><FontAwesomeIcon icon="plus-square" /> Add</button>
          <button className="btn btn-danger b-ml" name="reset" type="submit" onClick={this.props.resetList} ><FontAwesomeIcon icon="times" /> Clear all</button>
        </div>
      </form>
    );
  }
}

export default Form;
