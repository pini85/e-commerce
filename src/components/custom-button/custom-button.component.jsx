import React from "react";
import google from "../../assets/svg/google.svg";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {isGoogleSignIn ? (
        <div>
          <img src={google} className="icon" alt="" />
        </div>
      ) : (
        ""
      )}
      <span>{children}</span>
    </button>
  );
};
export default CustomButton;
