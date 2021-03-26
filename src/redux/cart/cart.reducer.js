import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  show: false,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        show: !state.show,
      };

    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
