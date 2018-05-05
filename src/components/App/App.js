import React, { Component } from 'react'
import "./App.css"
import CalendarContainer from '../CalendarContainer/CalendarContainer';
import Pay from '../Pay/Pay'
import Landing from '../Landing/Landing'
import Header from '../Header/Header'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className="App row">
        <Header />
        <main>
          <Switch>
            <Route exact path='/'         render={() => (<Landing />)}/>
            <Route exact path='/pay'      render={() => (<Pay />)}/>
            <Route exact path='/schedule' render={() => (<CalendarContainer />)}/>
            <Route exact path='/*'         render={() => (<Landing />)}/>
          </Switch>
        </main>
        <footer>
          <div className="row">
            <div className="col s6 center">
              Pocket Chef &copy; 2018
            </div>
            <div className="col s6 center">
              Made with &hearts; in DC
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App