import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import Select from "../../components/select/select.components";
import { removeItemFromCart } from "../../redux/cart/cart.action";

class Checkout extends Component {
  handleChange(e, item) {
    console.log(item);
    console.log(e.target.value);
    //take the value and add it to the dispatch of the selected item
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.items.map(item => {
          return (
            <>
              <Select
                quantity={item.quantity}
                handleChange={e => {
                  this.handleChange(e, item);
                }}
              ></Select>

              <div>name:{item.name}</div>
              <div>price:{item.price}</div>

              <div>indvidual:{item.quantity * item.price}</div>
              <div onClick={() => this.props.removeItemFromCart(item)}>
                REMOVE
              </div>
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
const mapStateToDispatch = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Checkout);
