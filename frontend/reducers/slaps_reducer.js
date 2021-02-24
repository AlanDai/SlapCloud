import {
  RECEIVE_SLAPS,
  RECEIVE_SLAP
} from "../actions/slap_actions";

const initialState = {}

const slapsReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SLAPS:
      Object.keys(action.payload.slaps).forEach(key => {
        newState[key] = action.payload.slaps[key];
      })
      return newState;
    case RECEIVE_SLAP:
      newState[action.payload.slap.id] = action.payload.slap;
      return newState;
    default:
      return state;
  }
}

export default slapsReducer;