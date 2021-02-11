import { FETCH_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const initialState = {
  id: null,
  email: null,
};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case RECEIVE_USER:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state;
  }
};

export default usersReducer;