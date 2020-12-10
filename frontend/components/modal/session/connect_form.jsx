import React from 'react';

const DEFAULT_EMAIL_INPUT = "Your email address"

class ConnectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emailInput: DEFAULT_EMAIL_INPUT
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmail(e) {
    let inputValue = e.currentTarget.value
    
    if(e.currentTarget.value.length === 0){
      inputValue = DEFAULT_EMAIL_INPUT
    }

    return e => this.setState({
      emailInput: inputValue
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
  }

  render() {
    return (
      <div>
        <form className="connect-form" onSubmit={this.handleSubmit}>
          <div className="media-btn-container">
            <p>Continue with Facebook</p>
            <p>Continue with Google</p>
            <p>Continue with Apple</p>
          </div>
          <div>
            <input
              type="text"
              value={this.state.emailInput}
              onChange={this.updateEmail}
            />
            <input
              type="submit"
              className="connect-submit"
              type="submit"
              value="Continue"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default ConnectForm;