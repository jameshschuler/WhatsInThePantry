import api from "../../api";
import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_AMOUNTS_SUCCESS,
  FETCH_ITEM_CATEGORIES_SUCCESS,
  FETCH_ITEM_LOCATIONS_SUCCESS
} from "../types";
import { beginFetch, fetchFailure, fetchSuccess } from "./globalActions";

const fetchItemsSuccess = items => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    items
  };
};

const fetchItemCategoriesSuccess = itemCategories => {
  return {
    type: FETCH_ITEM_CATEGORIES_SUCCESS,
    itemCategories
  };
};

const fetchItemLocationsSuccess = itemLocations => {
  return {
    type: FETCH_ITEM_LOCATIONS_SUCCESS,
    itemLocations
  };
};

const fetchItemAmountsSuccess = itemAmounts => {
  return {
    type: FETCH_ITEM_AMOUNTS_SUCCESS,
    itemAmounts
  };
};

export const createItem = values => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const { itemName, amount, category, description, location } = values;

  const response = await api.items.create({
    name: itemName,
    defaultItemAmountId: amount,
    itemCategoryId: category,
    defaultItemLocationId: location,
    description
  });

  if (response.errors) {
    dispatch(fetchFailure(false, response.errors));
  } else {
    dispatch(fetchSuccess(false, response.data.message));
  }
};

export const getItems = () => async (dispatch, getState) => {
  const response = await api.items.getItems();

  if (response.data && response.data.errors) {
    dispatch(fetchFailure(false, response.data.errors));
  } else {
    dispatch(fetchItemsSuccess(response));
    dispatch(fetchSuccess(false));
  }
};

export const getItemCategories = () => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.category.getItemCategories();

  if (response.data && response.data.errors) {
    dispatch(fetchFailure(false, response.data.errors));
  } else {
    dispatch(fetchItemCategoriesSuccess(response));
    dispatch(fetchSuccess(false));
  }
};

export const getItemLocations = () => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.itemLocation.getItemLocations();

  if (response.data && response.data.errors) {
    dispatch(fetchFailure(false, response.data.errors));
  } else {
    dispatch(fetchItemLocationsSuccess(response));
    dispatch(fetchSuccess(false));
  }
};

export const getItemAmounts = () => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.itemAmount.getItemAmounts();

  if (response.data && response.data.errors) {
    dispatch(fetchFailure(false, response.data.errors));
  } else {
    dispatch(fetchItemAmountsSuccess(response));
    dispatch(fetchSuccess(false));
  }
};
