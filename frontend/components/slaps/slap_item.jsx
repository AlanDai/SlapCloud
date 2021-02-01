import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SlapItem extends React.Component {
  loadSlapImage = () => {
    if(!this.props.slap.image) {
      return <div className="default-slap-image" />
    } else {
      return <img className="slap-item-image" src={this.props.slap.image} />
    }
  }

  playButton = () => (
    <button className="play-button" onClick={this.handleClick}>
      {this.props.playing && this.props.slap.id === this.props.curr ?
        <FontAwesomeIcon icon="pause" /> :
        <FontAwesomeIcon icon="play" />
      }
    </button>
  )

  handleClick = () => {
    if (this.props.slap.id != this.props.curr) {
      this.props.setCurrentSlap(this.props.slap.id);
      this.props.setQueue([]);
      this.props.playSlap();
    } else {
      this.props.playing ? this.props.pauseSlap() : this.props.playSlap();
    }
  }

  render () {
    const { slap, setQueue, playSlap, pauseSlap } = this.props;

    return (
      <div className="slap-item">
        <NavLink to={`${slap.uploader.id}/${slap.name}`}>{this.loadSlapImage()}</NavLink>
        {this.playButton()}
        <div className="slap-item-info">  
          <p>{slap.uploader.email}</p>
          <h3>{slap.name}</h3>
        </div>
      </div>
    )
  }
}

export default withRouter(SlapItem);