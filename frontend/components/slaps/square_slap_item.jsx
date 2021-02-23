import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import PlayButtonContainer from '../music_player/play_button_container';

class SquareSlapItem extends React.Component {
  loadSlapImage = () => {
    if(!this.props.slap.image) {
      return (
        <div className="square-slap-image">
          <div className="default-slap-image" />
          <div className="square-item-screen" />
          <PlayButtonContainer slap={this.props.slap} />
        </div>
      )
    } else {
      return (
        <div className="square-slap-image">
          <img className="slap-item-image" src={this.props.slap.image} />
          <div className="square-item-screen" />
          <PlayButtonContainer slap={this.props.slap} />
        </div>
      )
    }
  }

  render () {
    const { slap } = this.props;

    return (
      <div className="square-slap-item">
        {this.loadSlapImage()}
        <div className="square-slap-info">  
          <Link to={"/slap/" + slap.id} style={{ textDecoration: 'none' }}>
            <span className="square-slap-name">{slap.name}</span>
          </Link>
          <Link to={"/user/" + slap.uploader.id} style={{ textDecoration: 'none' }}>
            <span className="square-slap-uploader">{slap.uploader.username ? slap.uploader.username : slap.uploader.email}</span>
          </Link>
          
        </div>
      </div>
    )
  }
}

export default withRouter(SquareSlapItem);