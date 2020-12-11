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
    if(this.props.currentUser){
      return (
        <div className="user-btns">
          <button>{this.props.currentUser.email}</button>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className="session-btns">
          <button onClick={this.handleClick}>Sign in</button>
          <button onClick={this.handleClick}>Create account</button>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="navbar">
        <Link to="/discover">
          <img className="logo" src="https://vignette.wikia.nocookie.net/super-adventure-rpg/images/b/bf/Slap.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/421/window-height/420?cb=20190115092926"/>
        </Link>
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