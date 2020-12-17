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
      return Object.assign({}, action.payload);
    case RECEIVE_SLAP:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    default:
      return state;
  }
}

export default slapsReducer;