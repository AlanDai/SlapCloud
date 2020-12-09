import { FETCH_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  id: null
};

export default sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return { id: action.payload.id }
    case LOGOUT_CURRENT_USER:
      return state;
    default:
      return state;
  }
}