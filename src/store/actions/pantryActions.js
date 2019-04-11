import api from "../../api";
import { FETCH_PANTRIES_SUCCESS } from "../types";
import { beginFetch, fetchFailure, fetchSuccess } from "./globalActions";

const fetchPantriesSuccess = pantries => {
  return {
    type: FETCH_PANTRIES_SUCCESS,
    pantries
  };
};

export const createPantry = name => async (dispatch, getState) => {
  dispatch(beginFetch(true));
  const response = await api.pantry.create({
    name
  });

  if (response.errors) {
    dispatch(fetchFailure(false, response.errors));
  } else {
    dispatch(fetchSuccess(false, response.data.message));
  }
};

export const createPantryItem = pantryItem => async (dispatch, getState) => {
  console.log(pantryItem);
  dispatch(beginFetch(true));

  const { itemId, price, unit, amount, pantryId, location } = pantryItem;
  const response = await api.pantry.createPantryItem({
    itemId,
    pantryId,
    price,
    unit,
    itemAmountId: amount,
    itemLocationId: location
  });

  if (response.errors) {
    dispatch(fetchFailure(false, response.errors));
  } else {
    dispatch(fetchSuccess(false, response.data.message));
  }
};

export const getPantries = () => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.pantry.getPantries();

  if (response.data && response.data.errors) {
    dispatch(fetchFailure(false, response.data.errors));
  } else {
    dispatch(fetchPantriesSuccess(response));
    dispatch(fetchSuccess(false));
  }
};
