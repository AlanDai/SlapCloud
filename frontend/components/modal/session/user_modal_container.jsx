import React from "react";
import { connect } from "react-redux";
import { emailCheck, emailUncheck, signup, login } from "../../../actions/session_actions";
import { closeUserModal } from '../../../actions/ui_actions';

import ConnectForm from "./connect_form";
import SessionForm from "./session_form";

const UserModal = ({ emailExists, email, error, emailCheck, emailUncheck, signup, login, closeUserModal }) => {
  if (emailExists === null) {
    return <ConnectForm
      emailCheck={emailCheck}
      emailUncheck={emailUncheck}
      login={login}
    />;
  } else if (emailExists === false) {
    return <SessionForm
      action={signup}
      email={email}
      emailUncheck={emailUncheck}
      submitText="Accept & continue"
      closeUserModal={closeUserModal}
    />
  } else {
    return <SessionForm
      action={login}
      email={email}
      emailUncheck={emailUncheck}
      error={error}
      submitText="Sign in"
      closeUserModal={closeUserModal}
    />
  }
};

const mapStateToProps = ({ session, errors }) => ({
  emailExists: session.emailExists,
  email: session.email,
  error: errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  emailCheck: email => dispatch(emailCheck(email)),
  emailUncheck: () => dispatch(emailUncheck()),
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  closeUserModal: () => (dispatch(closeUserModal())),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
