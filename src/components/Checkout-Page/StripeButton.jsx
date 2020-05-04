import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import crown from '../../images/crown.svg';


function StripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_b1r8jbkVlJfTw8IuurLoDHpy00OfZ275SX";

    function onToken(token) {
        console.log(token);
        alert("Payment Successful")
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing, LLC"
            billingAddress
            shippingAddress
            image={crown}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeButton;