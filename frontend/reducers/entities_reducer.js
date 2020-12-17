import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import slapsReducer from "./slaps_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  slaps: slapsReducer,
});

export default entitiesReducer;