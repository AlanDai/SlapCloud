import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SlapItem from "../slaps/slap_item";
import { fetchUser, updateUserImage } from "../../util/user_api_util";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    fetchUser(this.props.match.params.userId)
      .then(({ user, slaps }) => {
        this.setState({
          user,
          slaps,
        })
        this.props.receiveSlaps(slaps);
      })
  }

  profileHeader = () => {
    const { user } = this.state

    return (
      <div id="profile-header" >
        {
          user.profile_image ?
            <img src={user.profile_image} />:
            <div id="profile-default-image" />
        }
        <div id="profile-header-info" >
          <span>{user.email}</span>
          {user.location && <span>{user.location}</span>}
        </div>
        <div id="profile-image-buttons">
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
    updateUserImage(this.state.user.id, formData).then(res => console.log(res));
  }

  handleCoverClick = (e) => {
    const cu = document.getElementById('cover-upload')
    cu.click()
  }

  handleCoverChange = (e) => {
    const formData = new FormData();
    formData.append('user[cover_image]', e.currentTarget.files[0]);
    updateUserImage(this.state.user.id, formData).then(res => console.log(res));
  }

  render() {
    if (!this.state) return (<div></div>)
    const { user, slaps } = this.state;

    return (
      <div id="profile-page">
        {this.profileHeader()}
        <div id="profile-content">
          {slaps && Object.values(slaps).map((slap, id) =>
            <SlapItem key={id} slap={slap} />
          )}
        </div>
      </div>
    )
  }

}

export default ProfilePage;