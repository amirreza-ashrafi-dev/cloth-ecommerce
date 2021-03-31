import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItem
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.show
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce(
    (accumilator, item) => accumilator + item.quantity * item.price,
    0
  )
);

export const selectCartItemCount = createSelector([selectCartItems], (items) =>
  items.reduce((accumilator, item) => accumilator + item.quantity, 0)
);
