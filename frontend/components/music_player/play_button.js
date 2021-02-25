import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PlayButton = ({ idx, queue, playing, curr, slap, setCurrentSlap, setQueue, setPrev, playSlap, pauseSlap }) => {
  
  function handleClick(e) {
    if (slap.id != curr) {
      setCurrentSlap(slap.id);
      
      if (idx !== undefined && queue !== undefined) {
        idx > 0 ? setPrev(queue.slice(0, idx)) : setPrev([]);
        idx + 1 < queue.length ? setQueue(queue.slice(idx+1, queue.length)) : setQueue([])
      } else {
        setPrev([]);
        setQueue([]);
      }
      
      setTimeout(()=>{handlePlay()}, 1);
    } else {
      handlePlay();
    }
  }

  function handlePlay () {
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