import { connect } from 'react-redux';
import {
  setCurrentSlap,
  setQueue,
  playSlap,
  pauseSlap
} from '../../actions/music_player_actions';


import SlapItem from './slap_item';

const mapStateToProps = ({ ui }, { slap }) => {
  const { playing, curr } = ui.musicPlayer;

  return {
    slap,
    curr,
    playing,
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentSlap: (slapId) => dispatch(setCurrentSlap(slapId)),
  setQueue: (slaps) => dispatch(setQueue(slaps)),
  playSlap: () => dispatch(playSlap()),
  pauseSlap: () => dispatch(pauseSlap()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SlapItem);