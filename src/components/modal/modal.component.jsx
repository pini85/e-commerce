import React from "react";
import { connect } from "react-redux";
import { setModal } from "../../redux/modal/modal.action";
import "./modal.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { modal } from "../../redux/modal/modal.selectors";

class Modal extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "unset";
    document.body.style.overflowX = "hidden";
  }

  render() {
    return (
      <div className="modal">
        <div className="modal__close">
          <CustomButton onClick={this.props.setModal}>
            Sure thanks!
          </CustomButton>
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
const mapStateToProps = ({ modal }) => ({
  modal: modal
});
const mapDispatchToProps = dispatch => ({
  setModal: () => dispatch(setModal(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
