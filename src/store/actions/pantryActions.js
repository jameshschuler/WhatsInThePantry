import api from "../../api";
import { FETCH_PANTRIES_SUCCESS, FETCH_PANTRY_ITEMS_SUCCESS } from "../types";
import { beginFetch, fetchFailure, fetchSuccess } from "./globalActions";

const fetchPantriesSuccess = pantries => {
  return {
    type: FETCH_PANTRIES_SUCCESS,
    pantries
  };
};

const fetchPantryItemsSuccess = pantryItems => {
  return {
    type: FETCH_PANTRY_ITEMS_SUCCESS,
    pantryItems
  };
};

export const createPantry = name => async (dispatch, getState) => {
  dispatch(beginFetch(true));
  const response = await api.pantry.create({
    name
  });

  const {
    code,
    messages,
    result: { errors }
  } = response;

  if (code === 201) {
    dispatch(fetchSuccess(false, messages));
  } else {
    console.log(errors);
    dispatch(fetchFailure(false, errors));
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
  const {
    code,
    result: { errors, pantries }
  } = response;

  if (code === 200) {
    dispatch(fetchPantriesSuccess(pantries));
    dispatch(fetchSuccess(false));
  } else {
    dispatch(fetchFailure(false, errors));
  }
};

export const getPantryItems = pantryId => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.pantry.getPantryItems(pantryId);
  const {
    code,
    result: { errors, pantryItems }
  } = response;

  if (code === 200) {
    dispatch(fetchPantryItemsSuccess(pantryItems));
    dispatch(fetchSuccess(false));
  } else {
    dispatch(fetchFailure(false, errors));
  }
};
