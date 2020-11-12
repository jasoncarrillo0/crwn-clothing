import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import crown from '../../images/crown.svg';
import axios from 'axios';


function StripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_b1r8jbkVlJfTw8IuurLoDHpy00OfZ275SX";

    function onToken(token) {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment Successful")
        }).catch(error => {
            console.log("Payment Error: " + JSON.parse(error));
            alert("There was a problem with your payment. Please make sure to use the provided test card.");
        });
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