import {
  RECEIVE_SLAPS,
  RECEIVE_SLAP
} from "../actions/slap_actions";

const initialState = {}

const slapsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SLAPS:
      return Object.assign({...state}, action.payload.slaps);
    case RECEIVE_SLAP:
      const newState = Object.assign({}, state)
      newState[action.payload.slap.id] = action.payload.slap;
      return newState;
    default:
      return state;
  }
}

export default slapsReducer;