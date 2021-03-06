import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import Checkoutitem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
const Chceckout = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            <div className='header-block'>
                <span>product</span>
            </div>
        </div>
        {
            cartItems.map((cartitem) => <Checkoutitem key={cartitem.id} cartItem={cartitem} />)
        }
        <div className='total'>${total}</div>

        <div className='test-warning'>
            * Please use the following test credit card for payments *
            <br />
            4242 4242 4242 4242 - Exp:10/21 - cvv:123
        </div>

        <StripeButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Chceckout);