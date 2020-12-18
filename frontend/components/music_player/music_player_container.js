import { connect } from 'react-redux';
import MusicPlayer from './music_player';

import {
  fetchPreviousSlap,
  fetchCurrentSlap,
  fetchNextSlap,
} from '../../actions/music_player_actions';

const mapStateToProps = ({entities, ui}) => {
  const { slaps } = entities.slaps;
  const { playing, next, prev, curr } = ui

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
  fetchCurrentSlap: slapId => dispatch(fetchCurrentSlap(slapId)),
  fetchNextSlap: slapId => dispatch(fetchNextSlap(slapId)),
  fetchQueue: slaps => dispatch(fetchQueue(slaps)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)