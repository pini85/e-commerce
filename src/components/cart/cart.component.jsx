import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import "./cart.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import icon from "../../assets/svg/cart.svg";

const Cart = ({ toggleCartHidden, hidden, quantity }) => {
  return (
    <div onClick={toggleCartHidden} className="icon-container">
      <img className="icon-container" src={icon} alt="" />
      <span className={`icon-count ${!hidden ? "icon-count-animate" : ""}`}>
        {quantity}
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  hidden: state.cart.hidden,
  quantity: selectCartItemsCount(state)
  // cart.cartItems.reduce(
  //   (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
  //   0
  // we made this as a memoize)
});
const mapStateToDispatch = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Cart);
