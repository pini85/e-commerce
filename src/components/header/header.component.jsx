import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../components/header/header.styles.scss";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);

// export default Header;
