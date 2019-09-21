import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div>
      <div className="cart-item">
        <span>{quantity}</span>
        <img src={imageUrl} alt={name} className="cart-item__img" />

        <div className="cart-item__details">
          <div className="cart-item__name">{name}</div>
          <div className="cart-item__price">
            {price}
            {quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
