import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.logout();
  }
  
  handleClick(e) {
    this.props.openUserModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.value);
  }

  userButtons() {
    if(loggedIn){
      return (
        <div>
          <button>Upload</button>
          <button>{this.props.username}</button>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.handleClick}>Sign in</button>
          <button onClick={this.handleClick}>Create account</button>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="navbar">
        <img src="https://seeklogo.com/images/S/soundcloud-logo-DBFE84F880-seeklogo.com.png"/>
        <Link to="/discover">Home</Link>
        <Link to="/discover">Stream</Link>
        <Link to="/discover">Library</Link>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search" />
        </form>
        {this.userButtons()}
      </div>
    )
  }
}

export default NavBar;