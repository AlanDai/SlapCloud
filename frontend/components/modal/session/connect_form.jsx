import React from "react";

const DEFAULT_EMAIL_INPUT = "Your email address";

class ConnectForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    this.props.emailCheck(email);
  }

  render() {
    return (
      <div>
        <div className="media-btn-container">
          <p>Continue with Facebook</p>
          <p>Continue with Google</p>
          <p>Continue with Apple</p>
        </div>
        <form className="connect-form" onSubmit={this.handleSubmit}>
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
