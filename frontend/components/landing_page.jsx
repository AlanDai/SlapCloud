import React from "react";
import UserModalContainer from "./modal/session/user_modal_container";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ openModal: true });
  }

  render() {
    const { openModal } = this.state;

    return (
      <div>
        <button className="signin-btn" onClick={this.handleClick}>
          Sign in
        </button>
        <button className="signup-btn" onClick={this.handleClick}>
          Create account
        </button>
        {openModal && <UserModalContainer />}
      </div>
    );
  }
}

export default LandingPage;
