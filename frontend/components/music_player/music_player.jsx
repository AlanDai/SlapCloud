import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      currentPercent: 0,
      duration: 0,
      volume: 0.5,
      muted: false,
      looping: false,
    }
    
    this.loadMPComponents = this.loadMPComponents.bind(this);
  }

  componentDidMount = () => {
    const mp = document.getElementById('audio');
    if (!mp) return;
    document.addEventListener("keydown", (e) => {
      if(e.key === "Space") this.handlePlay(e);
    });

    // to properly color volume bar - not working
    const vbi = document.getElementById("volume-bar-input")
    vbi.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + (this.state.volume * 100) + '%, #CCCCCC ' + (this.state.volume * 100) + '%, #CCCCCC 100%)'
    vbi.oninput = function() {
      var value = (this.value-this.min)/(this.max-this.min)*100
      this.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + value + '%, #CCCCCC ' + value + '%, #CCCCCC 100%)'
    };
  }

  componentWillUnmount() {
    const mp = document.getElementById('audio');
    if(!mp) return;
    
    document.removeEventListener("keydown", () => {})
  }

  loadMPComponents = () => {

    return (
      <div id="mp-controls">
        {this.rewindButton()}
        {this.playButton()}
        {this.fastForwardButton()}
        {this.loopButton()}
        {this.sliderBar()}
        {this.volumeControl()}
        {this.songInfo(this.props.curr)}
      </div>
    )
  }

  rewindButton = () => (
    <button onClick={this.handleRewind}>
      <FontAwesomeIcon icon="step-backward" />
    </button>
  )

  handleRewind = e => {
    const mp = document.getElementById('audio');

    if(mp.currentTime > 10 && this.props.prev.length > 0) {
      this.props.addPreviousSlap(this.props.curr.id);
      this.props.setCurrentSlap(this.props.prev.pop());
    } else {
      mp.currentTime = 0;
      this.props.playSlap();
      mp.play();
    }

  }

  playButton = () => (
    <button id="playButton" onClick={this.handlePlay}>
      {this.props.playing ? 
        <FontAwesomeIcon icon="pause" /> : 
        <FontAwesomeIcon icon="play" />}
    </button>
  )

  handlePlay = e => {
    const mp = document.getElementById('audio');

    if(this.props.playing) {
      clearInterval(this.playingInterval);
      this.props.pauseSlap();
      mp.pause();
    } else {
      this.props.playSlap();
      mp.play();
    }
  }
  
  handlePlaying = (e) => {
    const mp = document.getElementById('audio');
    mp.volume = this.state.volume;
    if (!mp.paused) {
      this.playerInterval = setInterval(() => {

        // to color slider bar
        const sbi = document.getElementById("slider-bar-input")
        let currPlayedPercent = (this.state.currentTime / this.state.duration) * 100
        this.setState({ currentPercent: currPlayedPercent })
        sbi.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + currPlayedPercent + '%, #CCCCCC ' + currPlayedPercent + '%, #CCCCCC 100%)'
        sbi.oninput = function() {
          var value = (this.value-this.min)/(this.max-this.min)*100
          this.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + value + '%, #CCCCCC ' + value + '%, #CCCCCC 100%)'
        };

        this.setState({ currentTime: mp.currentTime });
      }, 50)
    }
  }

  fastForwardButton = () => (
    <button onClick={this.handleNextSong}>
      <FontAwesomeIcon icon="step-forward" />
    </button>
  )

  handleNextSong = (e) => {
    const mp = document.getElementById('audio');

    if (!this.state.looping) {
      this.props.addPreviousSlap(this.props.curr.id);
      this.props.setCurrentSlap(this.props.next.shift());
    }

    mp.currentTime = 0;
    this.props.playSlap();
    mp.play();
  }

  loopButton = () => (
    <button id="loop-button" onClick={this.handleLoop}>
      <FontAwesomeIcon icon="redo" />
    </button>
  )

  handleLoop = (e) => {
    const lb = document.getElementById("loop-button");
    if (this.state.looping) {
      this.setState({ looping: false });
      lb.style.color = "black";
    } else {
      this.setState({ looping: true });
      lb.style.color = "#FF4500";
    }
  }

  formatTime = (time) => {
    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time%60);
    if (seconds < 10) {
      return minutes + ':0' + seconds
    } else {
      return minutes + ':' + seconds
    }
  }

  sliderBar = () => (
    <div id="slider-bar">
      <p id="current-time">{this.formatTime(this.state.currentTime)}</p>
      <input 
        id="slider-bar-input"
        type="range" 
        min="0" max="100" 
        value={this.state.currentPercent}
        onChange={this.handleScrub}
        step="1"
      />
      <p id="total-duration">{this.formatTime(this.state.duration)}</p>
    </div>
  )

  handleScrub = (e) => {
    const mp = document.getElementById('audio');
    mp.currentTime = (e.target.value * this.state.duration / 100);

    this.setState({ currentTime: e.target.value, currentPercent: e.target.value })
  }


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
          value={this.state.volume * 100}
          onChange={this.handleVolumeChange}
          step="1"
        />
      </div>
    </div>
  )

  handleVolumeChange = (e) => {
    var volume = e.target.value / 100;
    const mp = document.getElementById('audio');
    mp.volume = parseFloat(volume);
    this.setState({ volume });
  }

  songInfo = (slap) => (
    <div id="song-info-container">
      <img id="song-img" src={slap.image} />
      <div id="song-info">
        <p>{slap.uploader.email}</p>
        <p>{slap.name}</p>
      </div>
    </div>
  )

  handleMetaData = (e) => {
    this.setState({ duration: e.target.duration });

    const pb = document.getElementById('playButton');
    console.log(pb);
    pb.click();
  }

  render() {
    const { curr } = this.props
    if (!curr) return null;

    return (
      <div id="music-player" className="footer">
        <audio id="audio"
          src={curr.audio}
          controls
          controlsList="nodownload"
          onPlaying={this.handlePlaying}
          onLoadedMetadata={this.handleMetaData}
          onEnded={this.handleNextSong}
        />
        {this.loadMPComponents()}
      </div>
    )
  }
}

export default MusicPlayer;