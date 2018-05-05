import React, { Component } from 'react';
// import logo from './logo.svg';
import CalendarContainer from '../CalendarContainer/CalendarContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row App">
        <CalendarContainer />
      </div>
    );
  }
}

export default App;
