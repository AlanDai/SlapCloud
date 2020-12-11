import {
  OPEN_USER_MODAL,
  CLOSE_USER_MODAL,
  CLOSE_ALL_MODALS
} from '../actions/ui_actions'
import {
  FETCH_CURRENT_USER
} from '../actions/session_actions'

const initialState = {
  userModal: false
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_USER_MODAL:
      return Object.assign({}, state, { userModal: true });
    case FETCH_CURRENT_USER:
    case CLOSE_USER_MODAL:
      return Object.assign({}, state, { userModal: false });
    case CLOSE_ALL_MODALS:
      return initialState;
    default:
      return state;
  }
}

export default uiReducer;