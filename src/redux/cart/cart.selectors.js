import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  // selectCart is the first selector which corresponds to the cart
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => {
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    );
  }
);

/*
Every time we call mapStateToProps in every component because when we call mapStateToProps on one component, it creates a brand new state object, thus calling the other mapStateToProps relying on the state, thus making the component rerender.
We need to memoize our state so if it is the same value, it will not be called again.
We passed state to our mapStateToProps because it will eventually bubble up to selectCart variable. Because it needs to reference first selectCartItems then selectCart which has the state.
Then it will call down again with cart=> cartItems thats why I used in the cart dropdown component the selectCarItems variable. It will call memoize eventually the quantity too.

 */
