import { connect } from 'react-redux';
import MusicPlayer from './music_player';

import {
  playSlap,
  pauseSlap,
  takePrevSlap,
  addPreviousSlap,
  setCurrentSlap,
  takeNextSlap,
  addNextSlap,
  setQueue
} from '../../actions/music_player_actions';

const mapStateToProps = ({entities, ui}) => {
  const { slaps } = entities;
  const { playing, next, prev, curr } = ui.musicPlayer;

  return {
    playing,
    next,
    prev,
    curr: slaps[curr],
  }
}

const mapDispatchToProps = dispatch => ({
  playSlap: () => dispatch(playSlap()),
  pauseSlap: () => dispatch(pauseSlap()),
  takePrevSlap: () => dispatch(takePrevSlap()),
  addPreviousSlap: slapId => dispatch(addPreviousSlap(slapId)), 
  setCurrentSlap: slapId => dispatch(setCurrentSlap(slapId)),
  takeNextSlap: () => dispatch(takeNextSlap()),
  addNextSlap: slapId => dispatch(addNextSlap(slapId)),
  setQueue: slaps => dispatch(setQueue(slaps)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)