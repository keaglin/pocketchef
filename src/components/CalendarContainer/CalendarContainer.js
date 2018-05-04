import React, { Component } from 'react'
import InfiniteCalendar, { defaultMultipleDateInterpolation } from 'react-infinite-calendar';
import Calendar from 'react-infinite-calendar'
import "./CalendarContainer.css"
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import { withMultipleDates, withRange } from 'react-infinite-calendar/lib/Calendar/withMultipleDates';
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class CalendarContainer extends Component {
  state = {
    avail: true,
    confirmButton: false,
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal =() => {
    this.setState({modalIsOpen: false});
  }

  handleAvail = () => {
    if (!this.state.avail) {
      console.log('no longer avail')
      this.setState({confirmButton: true})
    }
    // else this.setState(prevState => ({avail: !prevState}))
  }
  handleSelect = (e) => {
    if (this.state.avail) {
      console.log('selected')
      this.handleAvail()
    }
    else console.log('this date is no longer available. please select another.')
  }
  render () {
    let today = new Date();
    let firstDay = new Date(today.getFullYear(), today.getMonth(), 0);
    let endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return (
      <div className="cal-contain row">
        <div className="row">
          <div className="col s12">
            <h3>New Parents Support Plan</h3>
          </div>
        </div>
        {/* <div className="row">
          <div className="cal-item center" onClick={this.handleSelect}>1</div>
        </div> */}
        <div className="row">
          <InfiniteCalendar
            width={(window.innerWidth <= 650) ? window.innerWidth : 650}
            height={window.innerHeight - 250}
            rowHeight={70}
            selected={{}}
            disabledDays={[0,6]}
            min={lastWeek}
            max={endOfMonth}
            minDate={firstDay}
            maxDate={endOfMonth}
            // interpolateSelection={defaultMultipleDateInterpolation}
            displayOptions={{
              layout: 'portrait',
              showOverlay: false,
              shouldHeaderAnimate: true
            }}
            onSelect={function(date) {
              console.log('you selected ', date)
            }}
          />
        </div>
        <div className="row">
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
        <div className="row">
          <div className="col s12 center">
            <input type="submit" value="Confirm" onClick={this.openModal} />
          </div>
        </div>
        <div className="row">
          <div className="col s6 center">
            Pocket Chef &copy; 2018
          </div>
          <div className="col s6 center">
            Made with &hearts; in DC
          </div>
        </div>
      </div>
    )
  }
}

export default CalendarContainer