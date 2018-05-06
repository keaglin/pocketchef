import React, { Component } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
// { defaultMultipleDateInterpolation } from 'react-infinite-calendar';
// import Calendar from 'react-infinite-calendar'
// import "./CalendarContainer.css"
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import {Link} from 'react-router-dom'

class CalendarContainer extends Component {
  state = {
    avail: true,
    confirmButton: false
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
        {/* <div className="row">
          <div className="cal-item center" onClick={this.handleSelect}>1</div>
        </div> */}
        <div className="row">
          <div className="col s6 offset-s3 center">
            <InfiniteCalendar
              width={(window.innerWidth <= 650) ? window.innerWidth : 650}
              height={window.innerHeight - 250}
              rowHeight={70}
              // selected={{}}
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
        </div>
        <div className="row">
          <div className="col s12 center">
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

            {/* <!-- Modal Structure --> */}
            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
            </div>
            <Link to='/pay'>
              <input type="submit" value="Confirm" onClick={this.openModal} />
            </Link>
          </div>
        </div>    
      </div>
    )
  }
}

export default CalendarContainer