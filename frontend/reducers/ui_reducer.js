import { combineReducers } from "redux";
import modalsReducer from "./modals_reducer";
import musicPlayerReducer from "./music_player_reducer";

const uiReducer = combineReducers({
  modals: modalsReducer,
  musicPlayer: musicPlayerReducer,
});

export default uiReducer;