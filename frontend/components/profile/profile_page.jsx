import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fetchUser } from "../../util/user_api_util";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    fetchUser(this.props.match.params.userId).then(({ email, username, slaps }) => {
      this.setState({
        email,
        username,
        slaps,
      })
    })
  }

  render() {
    if (!this.state.email) return (<div></div>)

    const { email, username, slaps } = this.state;

    return (
      <div id="profile-page">
        <div id="profile-header">
          
        </div>
        <div id="profile-content">

        </div>
      </div>
    )
  }

}

export default ProfilePage;