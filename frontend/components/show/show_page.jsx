import React from "react";

import { fetchSlap } from "../../util/slap_api_util";
import PlayButtonContainer from "../music_player/play_button_container"

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    fetchSlap(this.props.match.params.slapId).then(slap => this.setState({ slap }));
  }

  render() {
    if (!this.state) return (<div></div>);

    const { slap } = this.state;

    return (
      <div id="show-page">
        <div id="show-header">
          <div>
            <div>
              <PlayButtonContainer slap={slap} />
              <div>
                <span>{slap.uploader.email}</span>
                <span>{slap.name}</span>
              </div>
              <div>
                <span>{slap.uploader.created_at}</span>
              </div>
            </div>
            <div id="show-waveform"></div>
          </div>
          <div>
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