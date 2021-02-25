import { connect } from 'react-redux';
import {
  setCurrentSlap,
  setQueue,
  setPrev,
  playSlap,
  pauseSlap
} from '../../actions/music_player_actions';


import PlayButton from './play_button';

const mapStateToProps = ({ ui }, { idx, queue, slap }) => {
  const { playing, curr } = ui.musicPlayer;

  return {
    idx,
    queue,
    slap,
    curr,
    playing,
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentSlap: (slapId) => dispatch(setCurrentSlap(slapId)),
  setPrev: (slaps) => dispatch(setPrev(slaps)),
  setQueue: (slaps) => dispatch(setQueue(slaps)),
  playSlap: () => dispatch(playSlap()),
  pauseSlap: () => dispatch(pauseSlap()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);