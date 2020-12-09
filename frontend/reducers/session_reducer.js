import {
  FETCH_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const initialState = {
  id: null,
  emailExists: null
};

export default sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return Object.assign({}, state, { id: action.payload.id });
    case LOGOUT_CURRENT_USER:
      return state;
    case RECEIVE_EMAIL_CHECK:
      return Object.assign({}, state, { emailExists: action.payload.emailExists });
    default:
      return state;
  }
};
