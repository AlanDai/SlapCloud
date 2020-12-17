import React from "react";
import { connect } from "react-redux";

import UserModalContainer from "./session/user_modal_container";
import ModalScreen from "./modal_screen";

const Modal = (props) => {
  return(
    <div className="modal-container">
      {props.userModal && <UserModalContainer />}
      {props.userModal && <ModalScreen />}
    </div>
  )
}

const mapStateToProps = ({ ui }) => ({
  userModal: ui.modals.userModal
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);