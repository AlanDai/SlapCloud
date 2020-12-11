import React from "react";
import { connect } from "react-redux";

import UserModalContainer from "./session/user_modal_container";

const Modal = (props) => {
  return(
    <div className="modal-container">
      {props.userModal && <UserModalContainer />}
    </div>
  )
}

const mapStateToProps = ({ ui }) => ({
  userModal: ui.userModal
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);