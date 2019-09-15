import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import "./cart.styles.scss";
import icon from "../../assets/svg/cart.svg";

class Cart extends Component {
  render() {
    console.log(this.props);
    return (
      <div onClick={this.props.toggleCartHidden} className="icon-container">
        <img className="icon-container" src={icon} alt="" />
        <span
          className={`icon-count ${
            !this.props.hidden ? "icon-count-animate" : ""
          }`}
        >
          0
        </span>
      </div>
    );
  }
  // <div className={`wrapper-gradient-${this.state.hot ? 'hot' : 'cold'}`}></div>
}
const mapStateToProps = ({ cart }) => ({
  hidden: cart.hidden
});
const mapStateToDispatch = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Cart);
