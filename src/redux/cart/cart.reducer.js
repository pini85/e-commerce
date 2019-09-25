import { CartActionTypes } from "./cart.types";
import { addItemToCart, addQuantity } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  cartItemQuantity: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,

        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => {
          return cartItem.id !== action.payload.id;
        })
      };
    case CartActionTypes.ADD_QUANTITY:
      console.log(action.payload);
      return {
        ...state,
        cartItemQuantity: addQuantity(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
