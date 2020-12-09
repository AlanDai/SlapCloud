import { combineReducers } from 'redux';

import sessionReducer from './session_reducer'
import uiReducer from './ui_reducer'

export default rootReducer = combineReducers({
  session: sessionReducer
})