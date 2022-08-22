/** @format */

import { combineReducers } from "redux";
import { allRoomReducer } from "./roomReducer";

const rootReducer = combineReducers({
  allRoom: allRoomReducer,
});

export default rootReducer;
