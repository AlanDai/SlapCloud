import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SlapItemContainer from "../slaps/slap_item_container";
import { fetchUser, updateUserImage } from "../../util/user_api_util";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
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
        this.props.receiveSlaps(slaps);
      })
  }

  profileHeader = () => {
    const { id, email, username, location, profile_image, cover_image } = this.state

    return (
      <div id="profile-header" >
        {
          profile_image ?
            <img src={profile_image} />:
            <div id="profile-default-image" />
        }
        <div id="profile-header-info" >
          <span>{email}</span>
          {location && <span>{location}</span>}
        </div>
        {id === this.props.currUser && 
          <div id="profile-image-buttons">
            <button
              id="profile-update-button"
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

  handleProfileClick = (e) => {
    const pu = document.getElementById('profile-upload')
    pu.click()
  }

  handleProfileChange = (e) => {
    const formData = new FormData();
    formData.append('user[profile_image]', e.currentTarget.files[0]);
    updateUserImage(this.state.id, formData).then(res => console.log(res));
  }

  handleCoverClick = (e) => {
    const cu = document.getElementById('cover-upload')
    cu.click()
  }

  handleCoverChange = (e) => {
    const formData = new FormData();
    formData.append('user[cover_image]', e.currentTarget.files[0]);
    updateUserImage(this.state.id, formData).then(res => console.log(res));
  }

  render() {
    if (!this.state) return (<div></div>)
    const { slaps } = this.state;

    return (
      <div id="profile-page">
        {this.profileHeader()}
        <div id="profile-content">
          {slaps && Object.values(slaps).map((slap, id) =>
            <SlapItemContainer key={id} slap={slap} />
          )}
        </div>
        <div style={{ height: 49 }}/>
      </div>
    )
  }

}

export default ProfilePage;