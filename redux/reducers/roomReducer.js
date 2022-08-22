/** @format */

import {
  ALL_ROOM_SUCCESS,
  ALL_ROOM_FAIL,
  CLEAR_ERROR,
} from "../constants/roomConstants";
const initialState = {
  rooms: [],
};
export const allRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ROOM_SUCCESS:
      return {
        roomCount: action.payload.roomCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomCount: action.payload.filteredRoomCount,
        rooms: action.payload.rooms,
      };
    case ALL_ROOM_FAIL:
      return {
        error: action.paylod,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
