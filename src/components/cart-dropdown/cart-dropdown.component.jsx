import React, { Component } from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">ITEMS</div>
      <div className="cart-dropdown-button">
        <CustomButton>Proceed to checkout</CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
