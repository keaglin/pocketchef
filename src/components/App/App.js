import React, { Component } from 'react'
import "./App.css"
import CalendarContainer from '../CalendarContainer/CalendarContainer';
import Pay from '../Pay/Pay'
import Landing from '../Landing/Landing'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
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
            <Route exact path='/*'        render={() => (<Landing />)}/>
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App