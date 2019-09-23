import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";

class Checkout extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => {
          return (
            <>
              <button>Increase</button>
              <div>quantity:{item.quantity}</div>
              <button>Decrease</button>
              <div>name:{item.name}</div>
              <div>price:{item.price}</div>

              <div>indvidual:{item.quantity * item.price}</div>
            </>
          );
        })}
        <div>total:{this.props.total}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: selectCartItems(state),
  total: selectCartItemsTotal(state)
});
// const mapStateToDispatch = dispatch => ({
//   quantity:
// })
export default connect(
  mapStateToProps,
  null
)(Checkout);
