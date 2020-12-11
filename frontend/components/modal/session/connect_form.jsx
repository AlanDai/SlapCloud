import React from "react";

const DEFAULT_EMAIL_INPUT = "  Your email address";

class ConnectForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleDemoClick = this.handleDemoClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDemoClick(e) {
    e.preventDefault();
    const demoUser = {
      email: "bob@gmail.com",
      password: "thebuilder",
    }
    this.props.login(demoUser);
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    this.props.emailCheck(email);
  }

  render() {
    return (
      <div className="connect-form">
        <form className="demo-input">
          <button onClick={this.handleDemoClick}>Demo</button>
        </form>
        <p>or</p>
        <form className="connect-input-form" onSubmit={this.handleSubmit}>
          <input type="email" placeholder={DEFAULT_EMAIL_INPUT} />
          <button type="submit" className="connect-submit" type="submit">
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export default ConnectForm;
