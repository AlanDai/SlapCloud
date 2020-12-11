import React from "react";

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
      password: e.target[0].value
    }
    this.props.action(user);
  }

  render() {
    const { email, submitText } = this.props;

    return(
      <div className="session-form">
        <button onClick={this.handleClick}>{"\u25C0"}{email}</button>
        <form className="session-input-form" onSubmit={this.handleSubmit}>
          <input type="password" placeholder="Your Password"/>
          <button type="submit" type="submit">
            {submitText}
          </button>
        </form>
      </div>
    )
  }
}

export default SessionForm;