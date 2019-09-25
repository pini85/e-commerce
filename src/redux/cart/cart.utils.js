export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// export const removeItem = (cartItems, cartItemToRemove) => {
//   const item = cartItems.find(cartItem => {
//     return cartItem.id === cartItemToRemove.id;
//   });
//   if (item) {
//   }
// };

export const addQuantity = (cartItems, cartItemQuantityToAdd) => {};
