import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout = (e) => {
    this.props.logout();
  }
  
  handleClick = (e) => {
    this.props.openUserModal();
  }


  handleKeyUp = (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
      const params = e.target.value;
      this.props.history.push(`/search/${params}`)
    }
  }

  userButtons() {
    if(this.props.currentUser){
      return (
        <div className="user-btns">
          {this.props.currentUser.profile_image &&
            <img id="navbar-profile-image" src={this.props.currentUser.profile_image}/>
          }
          <Link id="navbar-username-link" to={`/user/${this.props.sessionId}`} >
            <div id="navbar-username">
              {this.props.currentUser.username ?
                this.props.currentUser.username :
                this.props.currentUser.email
              }
            </div>
          </Link>
          <button id="logout-button" onClick={this.handleLogout}>Logout</button>
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
        <Link to="/discover">Discover</Link>
        {this.props.currentUser ?
          <Link to={`/user/${this.props.sessionId}`}>Profile</Link> :
          <button id="profile-button" onClick={this.handleClick}>Profile</button>
        }
        {this.props.currentUser ?
          <Link to="/upload">Upload</Link> :
          <button id="upload-button" onClick={this.handleClick}>Upload</button>
        }
        <div id="search-bar">
          <input type="text" placeholder="Search" onKeyUp={this.handleKeyUp}/>
        </div>
        {this.userButtons()}
      </div>
    )
  }
}

export default NavBar;