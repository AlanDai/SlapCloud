import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SlapItemContainer from "../slaps/slap_item_container";
import { fetchUser, updateUserInfo, updateUserImage } from "../../util/user_api_util";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updating: false,
    }
  }

  componentDidMount = () => {
    fetchUser(this.props.match.params.userId)
      .then(({ id, email, username, location, profile_image, cover_image, slaps }) => {
        this.setState({
          id,
          email,
          username,
          location,
          profile_image,
          cover_image,
          slaps,
        })
        
        const ph = document.getElementById("profile-header");
        if (cover_image) {
          ph.style.backgroundImage = `url(${cover_image})`;
          ph.style.backgroundSize = 'cover';
        }

        this.props.receiveSlaps(slaps);
      })
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      fetchUser(this.props.match.params.userId)
      .then(({ id, email, username, location, profile_image, cover_image, slaps }) => {
        this.setState({
          id,
          email,
          username,
          location,
          profile_image,
          cover_image,
          slaps,
        })
        
        const ph = document.getElementById("profile-header");
        if (cover_image) {
          ph.style.backgroundImage = `url(${cover_image})`;
          ph.style.backgroundSize = 'cover';
        }

        this.props.receiveSlaps(slaps);
      })
    }
  }

  profileHeader = () => {
    const { id, profile_image, cover_image, updating } = this.state

    return (
      <div id="profile-header" >
        {
          profile_image ?
            <img id="profile-image" src={profile_image} />:
            <div id="profile-default-image" />
        }

        {updating ?
          this.userInfoForm() :
          this.userInfo()
        }

        {id === this.props.currUser && !updating &&
          <div id="profile-image-buttons">
              <button
                id="profile-update-button"
                onClick={this.handleInfoClick}
              >
                <span>Update Info</span>
              </button>
            <button
              id="profile-upload-button"
              onClick={this.handleProfileClick}
            >
              <span><FontAwesomeIcon icon="camera" /> Update profile</span>
            </button>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={this.handleProfileChange}
            />
            <button
              id="cover-upload-button"
              onClick={this.handleCoverClick}
            >
              <span><FontAwesomeIcon icon="camera" /> Update cover</span>
            </button>
            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={this.handleCoverChange}
            />
          </div>
        }
      </div>
    )
  }

  userInfo = () => (
    <div id="profile-header-info" >
      <span id="info-username">{this.state.username ? this.state.username : this.state.email}</span>
      {this.state.location &&
        <span id="info-location">{this.state.location}</span>
      }
    </div>
  )

  userInfoForm = () => (
    <form id="profile-header-info" onSubmit={this.handleUpdate} >
      <input type="text" defaultValue={ this.state.username ? this.state.username : this.state.email } /> 
      <input type="text" defaultValue={this.state.location ? this.state.location : ""} />
      <input type="submit" value="Update"/>
    </form>
  )

  handleUpdate = (e) => {
    const updatedFields = {}
    if (e.target[0].value) updatedFields["username"] = e.target[0].value
    if (e.target[1].value) updatedFields["location"] = e.target[1].value

    if (Object.keys(updatedFields).length === 0) {
      this.setState({ updating: false })
    } else {
      updateUserInfo(this.state.id, updatedFields)
        .then(({ username, location }) => {
          this.setState({ username, location, updating: false })
        })
    }
  }

  handleInfoClick = (e) => {
    this.setState({ updating: !this.state.updating });
  }

  handleProfileClick = (e) => {
    const pu = document.getElementById('profile-upload');
    pu.click()
  }

  handleProfileChange = (e) => {
    const formData = new FormData();
    formData.append('user[profile_image]', e.currentTarget.files[0]);  
    updateUserImage(this.state.id, formData)
      .then(({ profile_image }) => this.setState({ profile_image }));
  }

  handleCoverClick = (e) => {
    const cu = document.getElementById('cover-upload')
    cu.click()
  }

  handleCoverChange = (e) => {
    const formData = new FormData();
    formData.append('user[cover_image]', e.currentTarget.files[0]);
    updateUserImage(this.state.id, formData)
      .then(({ cover_image }) => {
        this.setState({ cover_image });
        
        const ph = document.getElementById("profile-header")
        ph.style.backgroundImage = `url(${cover_image})`;
      }
    );
  }

  render() {
    if (!this.state) return (<div></div>)
    const { slaps } = this.state;

    return (
      <div id="profile-page">
        {this.profileHeader()}
        <div id="profile-content">
          {slaps ?
            Object.values(slaps).map((slap, id) =>
            <SlapItemContainer key={id} slap={slap} />
            ) :
            <div id="empty-profile-content">
              This user has not uploaded any slaps yet!
            </div>
        }
        </div>
        <div style={{ height: 49 }}/>
      </div>
    )
  }

}

export default ProfilePage;