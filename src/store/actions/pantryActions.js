import api from "../../api";
import { FETCH_PANTRIES_SUCCESS } from "../types";
import { fetchFailure, fetchSuccess } from "./globalActions";

const fetchPantriesSuccess = pantries => {
  return {
    type: FETCH_PANTRIES_SUCCESS,
    pantries
  };
};

export const getPantries = () => async (dispatch, getState) => {
  const response = await api.pantries.getPantries();

  if (response.data && response.data.errors) {
    dispatch(fetchFailure(false, response.data.errors));
  } else {
    dispatch(fetchPantriesSuccess(response));
    dispatch(fetchSuccess(false));
  }
};
