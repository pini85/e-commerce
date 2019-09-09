import React from "react";
import google from "../../assets/svg/google.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isFaceBookSignIn,
  isTwitterSignIn,
  ...otherProps
}) => {
  const socialBtn = (isGoogleSignIn, isFaceBookSignIn, isTwitterSignIn) => {
    if (isGoogleSignIn) {
      return "google-sign-in";
    } else if (isFaceBookSignIn) {
      return "facebook-sign-in";
    } else if (isTwitterSignIn) {
      return "twitter-sign-in";
    } else {
      return "";
    }
  };

  const socialIcon = (isGoogleSignIn, isFaceBookSignIn, isTwitterSignIn) => {
    if (isGoogleSignIn) {
      return (
        <div>
          <img src={google} className="icon" alt="" />
        </div>
      );
    } else if (isFaceBookSignIn) {
      return (
        <div>
          <img src={facebook} className="icon facebook" alt="" />
        </div>
      );
    } else if (isTwitterSignIn) {
      return (
        <div>
          <img src={twitter} className="icon facebook" alt="" />
        </div>
      );
    } else {
      return "";
    }
  };

  return (
    <button
      className={`${socialBtn(
        isGoogleSignIn,
        isFaceBookSignIn,
        isTwitterSignIn
      )} custom-button`}
      {...otherProps}
    >
      {socialIcon(isGoogleSignIn, isFaceBookSignIn, isTwitterSignIn)}

      <span>{children}</span>
    </button>
  );
};
export default CustomButton;
