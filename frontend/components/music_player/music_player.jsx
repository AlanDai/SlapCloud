import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
    }
  }

  // componentDidMount = () => {
  //   const mp = document.getElementById('audio');
  //   mp.addEventListener("timeupdate", e => {
  //     this.setState({
  //       currentTime: e.target.currentTime,
  //       duration: e.target.duration,
  //     })
  //   });
  // }

  // componentWillUnmount() {
  //   const mp = document.getElementById('audio');
  //   mp.removeEventListener("timeupdate", () => {})
  // }

  loadMPComponents = () => {

    return (
      <div>
        {this.rewindButton()}
        {this.playButton()}
        {this.fastForwardButton()}
      </div>
    )
    // rewind
    // play or pause
    // fast forward
    // scroll bar
    // volume
  }

  /* rewind button */

  rewindButton = () => (
    <button onClick={this.handleRewind}>
      <FontAwesomeIcon icon="step-backward"/>
    </button>
  )

  handleRewind = e => {
    const mp = document.getElementById('audio');

    if(mp.currentTime > 10 && this.props.prev.length > 0) {
      this.props.fetchPreviousSlap(this.props.curr.id);
      this.props.fetchCurrentSlap(this.props.prev.pop());
    } else {
      mp.currentTime = 0;
      this.props.playSlap();
      mp.play();
    }

  }

  /* play/pause button */

  playButton = () => (
    <button onClick={this.handlePlay}>
      {this.props.playing ? 
        <FontAwesomeIcon icon="play" /> : 
        <FontAwesomeIcon icon="pause" />}
    </button>
  )

  handlePlay = e => {
    const mp = document.getElementById('audio');

    if(this.props.playing) {
      this.props.pauseSlap();
      mp.pause();
    } else {
      this.props.playSong();
      mp.play();
    }
  }

  /* fast forward button */

  fastForwardButton = () => (
    <button onClick={this.handleFF}>
      <FontAwesomeIcon icon="step-forward" />
    </button>
  )

  handleFF = e => {
    const mp = document.getElementById('audio');

    this.props.fetchPreviousSlap(this.props.curr.id);
    this.props.fetchCurrentSlap(this.props.next.shift());

    mp.currentTime = 0;
    this.props.playSlap();
  }

  // handleAudioControls = e => {

  // }

  /* audio player event handler */

  handlePlaying = e => {

  }

  handleEnded = e => {

  }

  render() {
    const { curr, playing, next, prev} = this.props
    let audioUrl = '';

    if(curr) {
      audioUrl = curr;
    }

    return (
      <div id="music-player-footer">
        <audio id="audio"
          src={audioUrl}
          controls
          controlsList="nodownload"
          onPlaying={this.handlePlaying}
          onEnded={this.handleEnded}
        />
        {this.loadMPComponents()}
      </div>
    )
  }
}

export default MusicPlayer;