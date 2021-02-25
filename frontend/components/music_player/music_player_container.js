import { connect } from 'react-redux';
import MusicPlayer from './music_player';

import {
  playSlap,
  pauseSlap,
  addPreviousSlap,
  setCurrentSlap,
  takeNextSlap,
  fetchNextSlap,
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
  addPreviousSlap: slapId => dispatch(addPreviousSlap(slapId)), 
  setCurrentSlap: slapId => dispatch(setCurrentSlap(slapId)),
  takeNextSlap: () => dispatch(takeNextSlap()),
  fetchNextSlap: slapId => dispatch(fetchNextSlap(slapId)),
  setQueue: slaps => dispatch(setQueue(slaps)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)