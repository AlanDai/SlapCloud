import React from 'react';

import { Link } from 'react-router-dom';
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
  }

  componentDidMount = () => {
    document.addEventListener("keydown", (e) => {
      if(e.key === "Space") this.handlePlay(e);
    });
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.curr != this.props.curr) {
      const mp = document.getElementById('audio');
      mp.play();
    }
  }

  componentWillUnmount() {
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

        let currPlayedPercent = (this.state.currentTime / this.state.duration) * 100
        this.setState({ currentPercent: currPlayedPercent })
        const sbi = document.getElementById("slider-bar-input")
        sbi.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + currPlayedPercent + '%, #CCCCCC ' + currPlayedPercent + '%, #CCCCCC 100%)'

        this.setState({ currentTime: mp.currentTime });
      }, 50)
    }
  }

  fastForwardButton = () => (
    <button onClick={this.handleFastForward}>
      <FontAwesomeIcon icon="step-forward" />
    </button>
  )

  handleFastForward = (e) => {
    const mp = document.getElementById('audio')

    if (!this.props.next.length) {
      this.setState({ currentTime: this.state.duration })
      mp.currentTime = this.state.duration;
      mp.pause();
      this.props.pauseSlap();
      
    } else {
      this.setState({ currentTime: 0 })
      mp.currentTime = 0;
      this.props.addPreviousSlap(this.props.curr.id);
      this.props.takeNextSlap();
    }
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

  sliderBar = () => {
    var barColor = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + (this.state.currentPercent * 100) + '%, #CCCCCC ' + (this.state.currentPercent * 100) + '%, #CCCCCC 100%)'

    return (
      <div id="slider-bar">
        <p id="current-time">{this.formatTime(this.state.currentTime)}</p>
        <input 
          id="slider-bar-input"
          type="range" 
          min="0" max="100" 
          value={this.state.currentPercent}
          onChange={this.handleScrub}
          step="1"
          style={{background: barColor}}
        />
        <p id="total-duration">{this.formatTime(this.state.duration)}</p>
      </div>
    )
  }

  handleScrub = (e) => {
    const mp = document.getElementById('audio');
    mp.currentTime = (e.target.value * this.state.duration / 100);

    this.setState({ currentTime: e.target.value, currentPercent: e.target.value })

  }

  volumeControl = () => {
    var barColor = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + (this.state.volume * 100) + '%, #CCCCCC ' + (this.state.volume * 100) + '%, #CCCCCC 100%)'
    
    return (
      <div id="volume-bar">
        <button onClick={this.handleMute}>
          {this.volumeIcon()}
        </button>
        <div id="volume-dropdown">
          <input 
            id="volume-bar-input"
            type="range"
            min="0" max="100" 
            value={this.state.volume * 100}
            onChange={this.handleVolumeChange}
            step="1"
            style={{background: barColor}}
          />
        </div>
      </div>
    )
  }

  volumeIcon = () => {
    if (this.state.muted || this.state.volume == 0) {
      return <FontAwesomeIcon icon={"volume-mute"} />
    } else if (this.state.volume >= 0.5) {
      return <FontAwesomeIcon icon="volume-up" />
    } else {
      return <FontAwesomeIcon icon="volume-down" />
    }
  }

  handleMute = (e) => {
    const mp = document.getElementById('audio');
    const vbi = document.getElementById("volume-bar-input");
    if (this.state.muted) {
      this.setState({ muted: false })
      mp.volume = this.state.volume;
      vbi.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + (this.state.volume * 100) + '%, #CCCCCC ' + (this.state.volume * 100) + '%, #CCCCCC 100%)'
      vbi.value = this.state.volume;
    } else {
      this.setState({ muted: true });
      mp.volume = 0;
      vbi.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 0%, #CCCCCC 0%, #CCCCCC 100%)'
      vbi.value = 0;
    }
  }

  handleVolumeChange = (e) => {
    var volume = e.target.value / 100;
    const mp = document.getElementById('audio');
    mp.volume = parseFloat(volume);
    this.setState({ volume });

    const vbi = document.getElementById("volume-bar-input");
    vbi.style.background = 'linear-gradient(to right, #FF4500 0%, #FF4500 ' + e.target.value + '%, #CCCCCC ' + e.target.value + '%, #CCCCCC 100%)'
  }

  songInfo = (slap) => {
    if (slap.image) {
      return (<div id="song-info-container">
        <img id="song-img" src={slap.image} />
        <div id="song-info">
          <Link to={`/user/${slap.uploader.id}`}><p>{slap.uploader.email}</p></Link>
          <Link to={`/slap/${slap.id}`}><p>{slap.name}</p></Link>
        </div>
      </div>) 
    } else {
      return (<div id="song-info-container">
        <div id="song-img" />
        <div id="song-info">
          <Link to={`/user/${slap.uploader.id}`}><p>{slap.uploader.email}</p></Link>
          <Link to={`/slap/${slap.id}`}><p>{slap.name}</p></Link>
        </div>
      </div>)
    }
  }

  handleMetaData = (e) => {
    this.setState({ duration: e.target.duration });
  }

  handleNextSong = (e) => {
    if (!this.props.next.length) {
      this.props.pauseSlap();
      return;
    }

    const mp = document.getElementById('audio');
    mp.currentTime = 0;
    this.setState({ currentTime: 0 });

    if (this.state.looping) {
      mp.play();
    } else {
      this.props.addPreviousSlap(this.props.curr.id);
      this.props.takeNextSlap();
    }
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