 import {
  PLAY_SLAP,
  PAUSE_SLAP,
  RECEIVE_QUEUE,
  RECEIVE_PREV,
  PULL_PREV_SLAP,
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
  const newState = Object.assign({}, state)
  switch(action.type) {

    case PLAY_SLAP:
      return Object.assign({}, state, {playing: true});
    case PAUSE_SLAP:
      return Object.assign({}, state, {playing: false});
    case RECEIVE_QUEUE:
      return Object.assign({}, state, {next: action.payload})
    case RECEIVE_PREV:
      return Object.assign({}, state, {prev: action.payload})

    case PULL_PREV_SLAP:
      if (!newState.prev.length) return newState;
      var prevSlap = newState.prev.pop();
      return Object.assign({}, newState, {curr: prevSlap}, {prev: newState.prev})
    case RECEIVE_PREV_SLAP:
      newState.prev.push(action.payload);
      return newState;
    case RECEIVE_CURR_SLAP:
      return Object.assign({}, state, {curr: action.payload})
    case PULL_NEXT_SLAP:
      if (!newState.next.length) return newState;
      var nextSlap = newState.next.shift();
      return Object.assign({}, newState, {curr: nextSlap}, {next: newState.next})
    case RECEIVE_NEXT_SLAP:
      newState.next.unshift(action.payload)
      return newState;

    default:
      return state
  }
}

export default musicPlayerReducer;