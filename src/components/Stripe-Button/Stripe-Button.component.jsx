import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import crownIcon from '../../images/crown.svg'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51Gtom6L344b0Rwzc8qpK9u6g4L9hzS8HqN5si53HlgIuBlTNSQvIKzwTj1w4wlXTZedO3Y5ySV47G8ZWyUiF5IMu00AeJja45X'
    
    const onToken = token => {
        alert('payment successful')
    }

    return (
       <StripeCheckout
            label='Pay Now'
            name= 'Crown Cloting Ltd.'
            billingAddress
            shippingAddress
            image = {crownIcon}
            description={`Your Total is $${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
       />
    )
}

export default StripeCheckoutButton
