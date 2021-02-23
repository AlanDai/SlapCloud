import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    this.props.emailUncheck()
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.props.email,
      username: e.target[0].value,
      password: e.target[1].value,
    }
    this.props.action(user).then(res => this.props.history.push('/discover'));
  }

  render() {
    const { email, submitText, error } = this.props;

    return(
      <div className="session-form">
        <button onClick={this.handleClick}>{"\u25C0"}{email}</button>
        <form className="session-input-form" onSubmit={this.handleSubmit}>
          {this.props.type === "signup" &&
            <input type="text" placeholder="Username"/>
          }
          <input type="password" placeholder="Your Password"/>
          <button type="submit" type="submit">
            {submitText}
          </button>
        </form>
        <div className="errors">{error}</div>
      </div>
    )
  }
}

export default withRouter(SessionForm);