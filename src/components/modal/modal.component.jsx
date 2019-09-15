import React from "react";
import { Link } from "react-router-dom";
import "./modal.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class Modal extends React.Component {
  state = { hideModal: false };
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }

  render() {
    return (
      <div className="modal">
        <div className="modal__close">
          <Link
            to={"/"}
            onClick={this.props.hideModal}
            className="modal__button"
          >
            <CustomButton> Close</CustomButton>
          </Link>
        </div>
        <div className="modal__heading">
          <h2>Email confirmation sent!</h2>
          <div className="modal__sub">
            <p>Please check your email and click on the link to get verified</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
