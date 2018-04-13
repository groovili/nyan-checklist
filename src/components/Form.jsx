import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';
import { StyleSheet, css } from 'aphrodite';
import appStyles from '../styles/styles.js';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/styles.css';
import { timeFormat } from '../config/config.js';

class Form extends React.Component
{
  render() {
    let formClass = "form-inline " + this.props.form.formClass;
    let selectedTime = undefined;
    if(this.props.form.date){
      selectedTime = moment(this.props.form.date);
    }
    else{
      selectedTime = moment().hour(0).minute(30);
    }

    return (
      <form id="task-form" name="task-form" className={formClass} onSubmit={this.props.submitForm}>
          <input className="form-control input-lg" placeholder="New task" name="task" type="text"
            onChange={this.props.inputChange} value={this.props.form.task}></input>
          <span className={css(appStyles.dividerSmall)}></span>
        <div className={css(appStyles.inlineBlock)}>
          <DatePicker
              selected={selectedTime}
              onChange={this.props.inputChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              dateFormat={timeFormat.toString()}
              timeFormat={timeFormat.toString()}
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
