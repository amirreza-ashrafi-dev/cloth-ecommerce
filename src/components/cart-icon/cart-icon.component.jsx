import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggle }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggle} />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);