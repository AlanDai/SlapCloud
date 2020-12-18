import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import PlayButtonContainer from '../slaps/play_button_container';

class SlapItem extends React.Component {
  loadSlapImage = () => {
    if(!this.props.slap.image) {
      return <div className="default-slap-image" />
    } else {
      return <img className="slap-item-image" src={this.props.slap.image} />
    }
  }

  render () {
    const { slap } = this.props;

    return (
      <div className="slap-item">
        <NavLink to={`${slap.uploader.id}/${slap.name}`}>{this.loadSlapImage()}</NavLink>
        <div className="slap-item-info">
          {/* <PlayButtonContainer slap={slap}/> */}
          <p>{slap.uploader.email}</p>
          <h3>{slap.name}</h3>
          <audio 
            src={slap.audio}
            controls
            controlsList="nodownload"
          />
        </div>
      </div>
    )
  }
}

export default withRouter(SlapItem);