import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IdIQ3HnukPiSaGZ2osljfXyGUF1NzeLKEOSb4oJmj0By3UzguZCDnyKEokneclI58L5cHGSX1AkA4jcoPJfC0UM00xU0yZYMu';

    const onToken = token => {
        alert('successfull pay');
        return console.log(token);
    }

    return (
        <StripeCheckOut
            label='Pay Now'
            name='CRWN CLOTHING Ltd'
            billingAdress
            shippingAdress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;