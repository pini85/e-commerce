import React from "react";
import { connect } from "react-redux";

import Modal from "../../components/modal/modal.component";

import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

class Homepage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.modalState.modal ? (
          <div>
            <Modal></Modal>
          </div>
        ) : null}
        <div className="homepage">
          <Directory />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalState: state.modal
});
export default connect(mapStateToProps)(Homepage);
