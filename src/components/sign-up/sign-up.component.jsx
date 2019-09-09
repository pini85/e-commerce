import React from "react";
import { Redirect } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  }

  errorMessage = error => {
    if (error) {
      if (error.code === "auth/weak-password") {
        this.setState({
          error:
            "Your password is too weak. The password should be at least 6 characters long."
        });
      } else if (error.code === "auth/email-already-in-use") {
        this.setState({
          error: "Email is already in use. Please try again."
        });
      } else if (error === "not same password") {
        this.setState({
          error: "Passwords don't match. Please try again."
        });
      }
    }
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.errorMessage("not same password");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
      this.errorMessage(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h3 className="heading-teritary">I do not have an account</h3>
        <p>Sign up with your email and password</p>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Enter Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Enter Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Enter Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirm Password"
            required
          />
          <div className="button-wrapper">
            <CustomButton type="submit">Sign UP</CustomButton>
          </div>
        </form>
        <div className="error-message">{this.state.error}</div>
      </div>
    );
  }
}

export default signUp;
