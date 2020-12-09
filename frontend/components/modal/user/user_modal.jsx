import React from "react";

import ConnectForm from './connect_form';
import SignupForm from "./signup_form";
import LoginForm from "./login_form";

export default UserModal = ({ isOpen, emailExists }) => {
  if (!isOpen) {
    return null;
  } else if(emailExists === null) {
    return (<ConnectForm />)
  } else if(emailExists === true){
    return (<LoginForm email={this.props} />)
  } else {
    return (<SignupForm email={this.props}/>)
  }
}



