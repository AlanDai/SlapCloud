import React from "react";
import UserModalContainer from "./modal/session/user_modal_container";


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ openModal: true })
  }

  render() {
    const { openModal } = this.state;

    return (
      <div>
        <button className="signin-btn" onClick={handleClick}>Sign in</button>
        <button className="signup-btn" onClick={handleClick}>Create account</button>
        { openModal &&
          <UserModalContainer />
        }
      </div>
    )
  }
}

export default LandingPage;