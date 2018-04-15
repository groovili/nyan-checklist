import React from 'react';
import Modal from 'react-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FreeSolid from '@fortawesome/fontawesome-free-solid';
import { StyleSheet, css } from 'aphrodite';
import appStyles from '../styles/styles.js';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/styles.css';
import { timeFormat } from '../config/config.js';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#app');

class CompleteModal extends React.Component
{
  render() {
    return (
      <div>
        <button onClick={this.props.openModal}>Open</button>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel=""
          >
          <button className="btn btn-modal-close btn-danger btn-sm" onClick={this.props.closeModal}><FontAwesomeIcon icon="times" /></button>
          <div className="text-center">
            <form id="log-time-form" name="log-time-form" onSubmit={this.props.submitForm}>
                <p>Please log spent time here</p>
                <div className={css(appStyles.inlineBlock)}>
                <div className={css(appStyles.inlineBlock)}>
                <DatePicker
                    selected={moment().hour(0).minute(30)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    dateFormat={timeFormat.toString()}
                    timeFormat={timeFormat.toString()}
                    timeCaption=""
                    className="form-control input-lg"
                    placeholderText="Spent time"
                    calendarClassName="rasta-stripes"
                    minTime={moment().hours(0).minutes(30)}
                    maxTime={moment().hours(23).minutes(30)}
                />
                </div>
                <span className={css(appStyles.dividerSmall)}></span>
                <button className="btn btn-success btn-lg" name="submit" type="submit"><FontAwesomeIcon icon="check-square" /></button>
                </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CompleteModal;
