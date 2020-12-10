import {
  FETCH_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_EMAIL_CHECK,
  REMOVE_EMAIL_CHECK,
} from "../actions/session_actions";

const initialState = {
  id: null,
  emailExists: null,
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return Object.assign({}, state, { id: action.payload.id });
    case LOGOUT_CURRENT_USER:
      return state;
    case RECEIVE_EMAIL_CHECK:
      return Object.assign({}, state, {email: action.payload.email}, {emailExists: action.payload.emailExists} )
    case REMOVE_EMAIL_CHECK:
      return Object.assign({}, state, {email: null}, {emailExists: null} )
    default:
      return state;
  }
};

export default sessionReducer;
