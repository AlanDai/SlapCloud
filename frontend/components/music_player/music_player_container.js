import { connect } from 'react-redux';
import MusicPlayer from './music_player';

import {
  playSlap,
  pauseSlap,
  fetchPreviousSlap,
  setCurrentSlap,
  fetchNextSlap,
  setQueue
} from '../../actions/music_player_actions';

const mapStateToProps = ({entities, ui}) => {
  const { slaps } = entities.slaps;
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
  fetchPreviousSlap: slapId => dispatch(fetchPreviousSlap(slapId)), 
  setCurrentSlap: slapId => dispatch(setCurrentSlap(slapId)),
  fetchNextSlap: slapId => dispatch(fetchNextSlap(slapId)),
  setQueue: slaps => dispatch(setQueue(slaps)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)