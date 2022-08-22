/** @format */

import {
  ALL_ROOM_SUCCESS,
  ALL_ROOM_FAIL,
  CLEAR_ERROR,
} from "../constants/roomConstants";
import axios from "axios";
import absoluteUrl from "next-absolute-url";
export const getAllRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms`);
    dispatch({
      type: ALL_ROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOM_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
