      return (
        <div>
          <div className="media-connect-btn">
            <p>Continue with Facebook</p>
            <p>Continue with Google</p>
            <p>Continue with Apple</p>
          </div>
          <p>or</p>
          <form onSubmit={this.handleSubmit}>
            <input
              value="Your email address or profile URL"
              onChange={this.update("username")}
              className="login-input"
            />
            <button type="email-submit">Continue</button>
          </form>
        </div>
      );