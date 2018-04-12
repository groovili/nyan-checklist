import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';

class Form extends React.Component
{
  render(){
    let formClass = "form-inline " + this.props.form.formClass;
    
    return (
      <form id="task-form" name="task-form" className={formClass} onSubmit={this.props.submitForm}>
        <div className="form-group">
          <input className="form-control" placeholder="New task" name="task" type="text"
            onChange={this.props.inputChange} value={this.props.form.task}></input>
          <button className="btn btn-info b-ml" name="submit" type="submit"><FontAwesomeIcon icon="plus-square" /> Add</button>
          <button className="btn btn-danger b-ml" name="reset" type="button" onClick={this.props.resetList} ><FontAwesomeIcon icon="times" /> Clear all</button>
        </div>
      </form>
    );
  }
}

export default Form;
