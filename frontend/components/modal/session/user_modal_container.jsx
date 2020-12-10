import React from "react";
import { connect } from "react-redux";
import { emailCheck, emailUncheck, signup, login } from "../../../actions/session_actions";

import ConnectForm from "./connect_form";
import SessionForm from "./session_form";

const UserModal = ({ emailExists, email, emailCheck, emailUncheck, signup, login }) => {
  if (emailExists === null) {
    return <ConnectForm
      emailCheck={emailCheck}
    />;
  } else if (emailExists === false) {
    return <SessionForm
      action={signup}
      email={email}
      emailUncheck={emailUncheck}
      submitText="Accept & continue"
    />
  } else {
    return <SessionForm
      action={login}
      email={email}
      emailUncheck={emailUncheck}
      submitText="Sign in"
    />
  }
};

const mapStateToProps = ({ session }) => ({
  emailExists: session.emailExists,
  email: session.email,
});

const mapDispatchToProps = (dispatch) => ({
  emailCheck: email => dispatch(emailCheck(email)),
  emailUncheck: () => dispatch(emailUncheck()),
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
