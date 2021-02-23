import React from "react";
import { withRouter } from "react-router-dom";

const DEFAULT_EMAIL_INPUT = "  Your email address";

class ConnectForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: null
    }

    this.handleDemoClick = this.handleDemoClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDemoClick(e) {
    e.preventDefault();
    const demoUser = {
      email: "bob@gmail.com",
      password: "thebuilder",
    }
    this.props.login(demoUser).then(res => this.props.history.push('/discover'));
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    if(email.length > 0){
      this.props.emailCheck(email);
    } else {
      this.setState({ error: "Enter a valid email address." })
    }
  }

  render() {
    const { error } = this.state;

    return (
      <div className="connect-form">
        <form className="demo-input">
          <button onClick={this.handleDemoClick}>Demo</button>
        </form>
        <form className="connect-input-form" onSubmit={this.handleSubmit}>
          <input type="email" placeholder={DEFAULT_EMAIL_INPUT} />
          <button type="submit" className="connect-submit" type="submit">
            Continue
          </button>
        </form>
        {error && <div className="errors">{error}</div>}
      </div>
    );
  }
}

export default withRouter(ConnectForm);
