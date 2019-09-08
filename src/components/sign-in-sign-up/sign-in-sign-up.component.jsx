import React from "react";

import "./sign-in-sign-up.styles.scss";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const SignInSignUpPage = () => (
  <div className="sign-container">
    <SignIn></SignIn>;<SignUp></SignUp>
  </div>
);

export default SignInSignUpPage;
