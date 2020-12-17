import {
  RECEIVE_SLAPS,
  RECEIVE_SLAP
} from "../actions/slap_actions";

const initialState = {
  slaps: []
}

const slapsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SLAPS:
      return Object.assign({}, state, {slaps: action.payload})
    case RECEIVE_SLAP:
      let newState = state;
      newState.slaps[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}

export default slapsReducer;