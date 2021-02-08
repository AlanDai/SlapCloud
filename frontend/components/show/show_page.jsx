import React from "react";
import moment from "moment";

import PlayButtonContainer from "../music_player/play_button_container"

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchSlap(this.props.match.params.slapId).then(action => this.setState({ slap: action.payload.slap }))
  }

  render() {
    console.log(this.state);
    if (!this.state) return (<div></div>);

    const { slap } = this.state;

    return (
      <div id="show-page">
        <div id="show-header">

          <div id="show-header-content">
            <PlayButtonContainer slap={slap} />
            <div id="show-header-info">
              <div><span>{slap.uploader.email}</span></div>
              <div><span>{slap.name}</span></div>
            </div>
            <div>
              <span>{moment(slap.uploader.created_at).fromNow()}</span>
            </div>
          </div>

          <div id="show-header-image">
            <img src={slap.image} />
          </div>
          
        </div>
        <div id="show-body">

        </div>
      </div>
    )
  }
}

export default ShowPage;