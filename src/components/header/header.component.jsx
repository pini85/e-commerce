import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../components/header/header.styles.scss";
import Cart from "../cart/cart.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, cart }) => (
  <div className="header">
    <Link to="./" className="header__logo-wrapper">
      <Logo title="logo" className="header__logo"></Logo>
    </Link>
    <div className="header__options">
      <div className="header__option">
        <Link className="header__option-text" to="/shop"></Link>
      </div>
      <div className="header__option">
        <Link className="header__option-text" to="/shop">
          Shop
        </Link>
      </div>
      <div className="header__option">
        <Link className="header__option-text" to="/shop">
          Categories
        </Link>
      </div>
      <div className="header__option">
        <Link className="header__option-text" to="/shop">
          Contact
        </Link>
      </div>
      <div className="header__option">
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="header__option-text">
            Sign out
          </div>
        ) : (
          <Link className="header__option-text" to="/signin">
            Sign in
          </Link>
        )}
      </div>
      <div className="header__option-cart">
        <Cart></Cart>
      </div>
    </div>
    {!cart ? <CartDropDown /> : null}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cart: state.cart.hidden
});

export default connect(mapStateToProps)(Header);

// export default Header;
