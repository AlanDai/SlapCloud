import { connect } from 'react-redux';
import {
  setQueue,
  playSlap,
  pauseSlap
} from '../../actions/music_player_actions';


import SlapItem from './slap_item';

const mapStateToProps = ({ ui }, { slap }) => {
  const { playing, next, prev, curr } = ui.musicPlayer;

  return {
    slap,
    curr,
    playing,
  }
}

const mapDispatchToProps = dispatch => ({
  setQueue: (slaps) => dispatch(setQueue(slaps)),
  playSlap: () => dispatch(playSlap()),
  pauseSlap: () => dispatch(pauseSlap()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SlapItem);