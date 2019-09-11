import React from "react";
import google from "../../assets/svg/google.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import github from "../../assets/svg/github.svg";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isFaceBookSignIn,
  isTwitterSignIn,
  isGithubSignIn,
  ...otherProps
}) => {
  const socialBtn = (
    isGoogleSignIn,
    isFaceBookSignIn,
    isTwitterSignIn,
    isGithubSignIn
  ) => {
    if (isGoogleSignIn) {
      return "google-sign-in";
    } else if (isFaceBookSignIn) {
      return "facebook-sign-in";
    } else if (isTwitterSignIn) {
      return "twitter-sign-in";
    } else if (isGithubSignIn) {
      return "github-sign-in";
    } else {
      return "";
    }
  };

  const socialIcon = (
    isGoogleSignIn,
    isFaceBookSignIn,
    isTwitterSignIn,
    isGithubSignIn
  ) => {
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
    } else if (isGithubSignIn) {
      return (
        <div>
          <img src={github} className="icon facebook" alt="" />
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
        isTwitterSignIn,
        isGithubSignIn
      )} custom-button`}
      {...otherProps}
    >
      {socialIcon(
        isGoogleSignIn,
        isFaceBookSignIn,
        isTwitterSignIn,
        isGithubSignIn
      )}

      <span>{children}</span>
    </button>
  );
};
export default CustomButton;
