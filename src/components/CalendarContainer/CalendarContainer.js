import React, { Component } from 'react'
import InfiniteCalendar from 'react-infinite-calendar';
import "./CalendarContainer.css"
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

class CalendarContainer extends Component {
  state = {
    avail: true
  }
  handleAvail = () => {
    console.log('no longer avail')
    this.setState({avail: false})
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
    let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return (
      <div className="cal-contain">
        <div className="row">
          <div className="col s12">
            <h3>New Parents Support Plan</h3>
          </div>
        </div>
        {/* <div className="row">
          <div className="cal-item center" onClick={this.handleSelect}>1</div>
        </div> */}
        <div className="row" onClick={this.handleSelect}>
          <InfiniteCalendar
            width={400}
            height={600}
            selected={today}
            // disabledDays={[0,6]}
            minDate={lastWeek}
            displayOptions={{
              layout: 'portrait',
              showOverlay: false,
              shouldHeaderAnimate: false
            }}
          />
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