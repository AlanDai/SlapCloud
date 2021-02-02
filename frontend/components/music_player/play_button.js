import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default PlayButton = () => {
  handleClick = (e) => {
    if (this.props.slap.id != this.props.curr && !this.props.playing) {
      this.props.setCurrentSlap(this.props.slap.id);
      this.props.setQueue([]);
      setTimeout(()=>{this.handlePlay(e)}, 10);
    } else {
      this.handlePlay(e);
    }
  }

  handlePlay = (e) => {
    if(this.props.playing) {
      this.props.pauseSlap();
      const mp = document.getElementById('audio');
      mp.pause();
    } else {
      this.props.playSlap();
      const mp = document.getElementById('audio');
      mp.play();
    }
  }

  return (
    <button className="play-button" onClick={this.handleClick}>
      {this.props.playing && this.props.slap.id === this.props.curr ?
        <FontAwesomeIcon icon="pause-circle" /> :
        <FontAwesomeIcon icon="play-circle" />
      }
    </button>
  )
}