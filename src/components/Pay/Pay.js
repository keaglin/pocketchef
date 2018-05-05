import React from 'react'
import SquarePaymentForm from 'react-square-hosted-fields'

const Pay = () => {
  return (
    <div>
      <div>
      Hello from Pay component
      </div>
      <div>
        <SquarePaymentForm appId="sq0idp-5tlOpPFwd6hAy27mAIknXQ" onNonceGenerated={this.handleNonce} />
      </div>
    </div>
  )
}

export default Pay