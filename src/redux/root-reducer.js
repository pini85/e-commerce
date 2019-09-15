import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import modalReducer from "./modal/modal.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  modal: modalReducer,
  cart: cartReducer
});
