import React from "react";

import ConnectForm from './connect_form';
// import SignupForm from "./signup_form";
// import LoginForm from "./login_form";

const UserModal = ({ emailExists }) => {
  if(emailExists === null) {
    return (<ConnectForm />)
  } else if(emailExists === true){
    return null
    // return (<LoginForm email={this.props} />)
  } else {
    return null;
    // return (<SignupForm email={this.props}/>)
  }
}

export default UserModal;