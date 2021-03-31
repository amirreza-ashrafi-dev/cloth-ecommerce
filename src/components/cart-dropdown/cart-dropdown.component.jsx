import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-items/cart-items.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({ cartItem, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className='cart-items' >
            {
                cartItem.length ? cartItem.map(item => (
                    <CartItem key={item.id} item={item} />
                )) : (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECK OUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItem: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));