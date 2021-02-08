import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PlayButton = ({ playing, curr, slap, setCurrentSlap, setQueue, playSlap, pauseSlap }) => {
  
  function handleClick(e) {
    if (slap.id != curr) {
      setCurrentSlap(slap.id);
      setTimeout(()=>{handlePlay(e)}, 1);
    } else {
      handlePlay(e);
    }
  }

  function handlePlay (e) {
    const mp = document.getElementById('audio');
    if(playing && slap.id === curr) {
      pauseSlap();
      mp.pause();
    } else {
      playSlap();
      mp.play();
    }
  }

  return (
    <button className="play-button" onClick={handleClick}>
      {
        playing && slap.id === curr ?
        <FontAwesomeIcon icon="pause-circle" /> :
        <FontAwesomeIcon icon="play-circle" />
      }
    </button>
  )
}

export default PlayButton;