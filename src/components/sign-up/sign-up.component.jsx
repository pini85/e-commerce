import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { setModal } from "../../redux/modal/modal.action";
import { connect } from "react-redux";

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
    document.querySelector(".form").reset();

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

      if (user && user.emailVerified === false) {
        await user.sendEmailVerification();
      }
      //   await user.emailVerified;
      //   if (user.emailVerified === false) {
      //     return (await user.emailVerified) === true;
      //   }
      //
      // }
      // if (user && user.emailVerified) {
      //
      //   this.setState({
      //     emailConfirmation: true
      //   });
      // }
      //Setting up the modal for the homepage
      this.props.setModal();
      document.querySelector(".sign-up-form").reset();
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
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
        <div className="error-message">{this.state.error}</div>
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
            <CustomButton type="submit">Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToDispatch = dispatch => ({
  setModal: () => dispatch(setModal(true))
});

export default connect(
  null,
  mapStateToDispatch
)(signUp);
