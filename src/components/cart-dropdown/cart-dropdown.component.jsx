import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-total">Total items:</div>
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.key} item={cartItem} />
        ))}
      </div>
      <div className="cart-dropdown-button">
        <CustomButton>Proceed to checkout</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropDown);
