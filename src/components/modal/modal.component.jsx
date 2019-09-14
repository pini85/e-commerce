import React from "react";
import "./modal.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class Modal extends React.Component {
  state = { hideModal: false };
  componentDidMount() {
    if (this.state.hideModal === false) {
      document.body.style.overflow = "hidden";
    } else if (this.state.hideModal === true) {
      console.log("mounted");
      document.body.style.overflow = "unset";
    }
  }
  componentWillUnmount() {
    console.log("unomunted");
    document.body.style.overflow = "unset";
  }

  render() {
    const modalClass =
      this.state.hideModal === true
        ? "modal display-none"
        : "modal display-block";

    const handleClose = () => {
      this.setState({
        hideModal: true
      });
    };
    return (
      <div className={modalClass}>
        <div className="modal__close">
          <CustomButton onClick={handleClose} className="modal__button">
            Close
          </CustomButton>
        </div>
        <div className="modal__heading">
          <h2>Email confirmation sent!</h2>
          <div className="modal__sub">
            <p>Please go to your email and click on the link to get verified</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
