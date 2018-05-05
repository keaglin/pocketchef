import React, { Component } from 'react'
import "./App.css"
import Modal from 'react-modal'
import CalendarContainer from '../CalendarContainer/CalendarContainer';
import Pay from '../Pay/Pay'
import Landing from '../Landing/Landing'
import Header from '../Header/Header'
import {Switch, Route} from 'react-router-dom'


const customStyles = {
  content : {
    position: 'fixed',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    // zIndex: '1000'
  }
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class App extends Component {
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
  handleSelect = (e) => {
    if (this.state.avail) {
      console.log('selected')
      this.handleAvail()
    }
    else console.log('this date is no longer available. please select another.')
  }


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
        {/* <div className="row">
          <div className="col s12 center">
            <input type="submit" value="Confirm" onClick={this.openModal} />
          </div>
        </div> */}
        
          <div className="pay-modal">
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              style={customStyles}
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