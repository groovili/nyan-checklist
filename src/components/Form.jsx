import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';
import { StyleSheet, css } from 'aphrodite';
import appStyles from '../styles/styles.js';

class Form extends React.Component
{
  render(){
    let formClass = "form-inline " + this.props.form.formClass;

    return (
      <form id="task-form" name="task-form" className={formClass} onSubmit={this.props.submitForm}>
          <input className="form-control input-lg" placeholder="New task" name="task" type="text"
            onChange={this.props.inputChange} value={this.props.form.task}></input>
          <span className={css(appStyles.dividerSmall)}></span>
          <button className="btn btn-primary btn-lg" name="submit" type="submit"><FontAwesomeIcon icon="plus-square" /></button>
      </form>
    );
  }
}

export default Form;
