import React, {Component} from 'react'
import SquarePaymentForm from 'react-square-hosted-fields'

class Pay extends Component {
  componentDidMount() {
    // let instance = M.Modal.getInstance(elem)
  }
  render () {  
    return (
      <div>
        <div>
        Hello from Pay component
        <SquarePaymentForm appId="sq0idp-5tlOpPFwd6hAy27mAIknXQ" onNonceGenerated={this.handleNonce} />
        </div>
        {/* <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
            <div>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Pay