import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';
import { StyleSheet, css } from 'aphrodite';
import appStyles from '../styles/styles.js';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/styles.css';

class Form extends React.Component
{
  render() {
    let formClass = "form-inline " + this.props.form.formClass;

    return (
      <form id="task-form" name="task-form" className={formClass} onSubmit={this.props.submitForm}>
          <input className="form-control input-lg" placeholder="New task" name="task" type="text"
            onChange={this.props.inputChange} value={this.props.form.task}></input>
          <span className={css(appStyles.dividerSmall)}></span>
        <div className={css(appStyles.inlineBlock)}>
          <DatePicker
              selected={this.props.form.date}
              onChange={this.props.inputChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              dateFormat="HH:mm"
              timeFormat="HH:mm"
              timeCaption=""
              className="form-control input-lg"
              placeholderText="Estimated time"
              calendarClassName="rasta-stripes"
              minTime={moment().hours(0).minutes(30)}
              maxTime={moment().hours(23).minutes(30)}
          />
          </div>
          <span className={css(appStyles.dividerSmall)}></span>
          <button className="btn btn-primary btn-lg" name="submit" type="submit"><FontAwesomeIcon icon="plus-square" /></button>
      </form>
    );
  }
}

export default Form;
