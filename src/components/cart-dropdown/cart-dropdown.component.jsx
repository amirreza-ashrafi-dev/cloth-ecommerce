import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-items/cart-items.component';
import { connect } from 'react-redux';

const CartDropDown = ({ cartItem }) => (
    <div className="cart-dropdown">
        <div className='cart-items' >
            {cartItem.map(item => (
                <CartItem key={item.id} item={item} />
                // console.log(item)
            ))}
        </div>
        <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItem } }) => ({
    cartItem
})

export default connect(mapStateToProps)(CartDropDown);