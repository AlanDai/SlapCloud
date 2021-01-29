import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      volume: 0.5,
      muted: false,
    }
    
    this.loadMPComponents = this.loadMPComponents.bind(this);
  }

  componentDidMount = () => {
    const mp = document.getElementById('audio');
    if(!mp) return;

    mp.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration,
      })
    });

    // to properly color slider bar
    const sbi = document.getElementById("slider-bar-input")
    sbi.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + this.state.currentTime + '%, #CCCCCC ' + this.state.currentTime + '%, #CCCCCC 100%)'
    sbi.oninput = function() {
      var value = (this.value-this.min)/(this.max-this.min)*100
      this.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + value + '%, #CCCCCC ' + value + '%, #CCCCCC 100%)'
    };

    // to properly color volume bar
    const vbi = document.getElementById("volume-bar-input")
    vbi.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + this.state.volume + '%, #CCCCCC ' + this.state.volume + '%, #CCCCCC 100%)'
    vbi.oninput = function() {
      var value = (this.value-this.min)/(this.max-this.min)*100
      this.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + value + '%, #CCCCCC ' + value + '%, #CCCCCC 100%)'
    };
  }

  componentWillUnmount() {
    const mp = document.getElementById('audio');
    if(!mp) return;
    
    mp.removeEventListener("timeupdate", () => {})
  }

  loadMPComponents = () => {

    return (
      <div id="mp-controls">
        {this.rewindButton()}
        {this.playButton()}
        {this.fastForwardButton()}
        {this.sliderBar()}
        {this.volumeControl()}
        {/* {this.songInfo(this.props.curr)} */}
      </div>
    )
  }

  rewindButton = () => (
    // <button onClick={this.handleRewind}>
    <button>
      <FontAwesomeIcon icon="step-backward" />
    </button>
  )

  // handleRewind = e => {
  //   const mp = document.getElementById('audio');

  //   if(mp.currentTime > 10 && this.props.prev.length > 0) {
  //     this.props.fetchPreviousSlap(this.props.curr.id);
  //     this.props.fetchCurrentSlap(this.props.prev.pop());
  //   } else {
  //     mp.currentTime = 0;
  //     this.props.playSlap();
  //     mp.play();
  //   }

  // }

  playButton = () => (
    // <button onClick={this.handlePlay}>
    <button>
      {this.props.playing ? 
        <FontAwesomeIcon icon="pause" /> : 
        <FontAwesomeIcon icon="play" />}
    </button>
  )

  // handlePlay = e => {
  //   const mp = document.getElementById('audio');

  //   if(this.props.playing) {
  //     this.props.pauseSlap();
  //     mp.pause();
  //   } else {
  //     this.props.playSong();
  //     mp.play();
  //   }
  // }

  fastForwardButton = () => (
    // <button onClick={this.handleFF}>
    <button>
      <FontAwesomeIcon icon="step-forward" />
    </button>
  )

  // handleFF = e => {
  //   const mp = document.getElementById('audio');

  //   this.props.fetchPreviousSlap(this.props.curr.id);
  //   this.props.fetchCurrentSlap(this.props.next.shift());

  //   mp.currentTime = 0;
  //   this.props.playSlap();
  // }

  sliderBar = () => (
    <div id="slider-bar">
      <input 
        id="slider-bar-input"
        type="range" 
        min="0" max="100" 
        value={this.state.currentTime}
        // onChange={this.handleChange} - handles user scrubbing
        step="1"
      />
    </div>
  )

  volumeControl = () => (
    <div id="volume-bar">
      <button>
        {this.state.muted ? 
          <FontAwesomeIcon icon="volume-mute" /> : 
          <FontAwesomeIcon icon="volume-up" />}
      </button>
      <div id="volume-dropdown">
        <input 
          id="volume-bar-input"
          type="range" 
          min="0" max="100" 
          // value="50" // will be variable later
          // onChange={this.handleChange} - handles user scrubbing
          step="1"
        />
      </div>
    </div>
  )

  songInfo = (slap) => (
    <div id="song-info-container">
      <img id="song-img"></img>
      <div id="song-info">
        <div>{slap.uploader}</div>
        <div>{slap.name}</div>
      </div>
    </div>
  )

  // // handleAudioControls = e => {

  // // }

  // /* audio player event handler */

  // handlePlaying = e => {

  // }

  // handleEnded = e => {

  // }

  render() {
    const { curr } = this.props
    if (!curr) return null;

    let audioUrl = curr;
    return (
      <div id="music-player" className="footer">
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