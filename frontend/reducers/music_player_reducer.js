 import {
  PLAY_SLAP,
  PAUSE_SLAP,
  RECEIVE_QUEUE,
  RECEIVE_PREV,
  RECEIVE_PREV_SLAP,
  RECEIVE_CURR_SLAP,
  PULL_NEXT_SLAP,
  RECEIVE_NEXT_SLAP
} from '../actions/music_player_actions'

const initialState = {
  playing: false,
  next: [],
  prev: [],
  curr: null,
}

const musicPlayerReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {

    case PLAY_SLAP:
      return Object.assign({}, state, {playing: true});
    case PAUSE_SLAP:
      return Object.assign({}, state, {playing: false});
    case RECEIVE_QUEUE:
      return Object.assign({}, state, {next: action.payload})
    case RECEIVE_PREV:
      return Object.assign({}, state, {prev: action.payload})

    case RECEIVE_PREV_SLAP:
      const played = state.prev + action.payload;
      return Object.assign({}, state, {prev: played})
    case RECEIVE_CURR_SLAP:
      return Object.assign({}, state, {curr: action.payload})
    case PULL_NEXT_SLAP:
      if (!state.next.length) return state;
      var nextSlap = state.next.pop();
      return Object.assign({}, state, {curr: nextSlap}, { next: state.next })
    case RECEIVE_NEXT_SLAP:
      let updatedQueue = state.next.unshift(action.payload)
      return Object.assign({}, state, {next: updatedQueue})

    default:
      return state
  }
}

export default musicPlayerReducer;