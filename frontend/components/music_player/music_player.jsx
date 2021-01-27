import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      muted: false,
    }
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
    document.getElementById("slider-bar-input").oninput = function() {
      var value = (this.value-this.min)/(this.max-this.min)*100
      this.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + value + '%, #CCCCCC ' + value + '%, #CCCCCC 100%)'
    };

    document.getElementById("volume-dropdown").oninput = function() {
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
      </div>
    )
    // scroll bar
    // volume
  }

  // /* rewind button */

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
      <input 
        id="volume-dropdown"
        type="range" 
        min="0" max="100" 
        value="50" // will be variable later
        // onChange={this.handleChange} - handles user scrubbing
        step="1"
      />
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
    const { curr, playing, next, prev} = this.props
    let audioUrl = '';

    if(curr) {
      audioUrl = curr;
    }

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