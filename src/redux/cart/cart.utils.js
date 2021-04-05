export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItem, cartItemToRemove) => {
  const existingCart = cartItem.find((item) => item.id === cartItemToRemove.id);

  if (existingCart.quantity === 1) {
    return cartItem.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItem.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
