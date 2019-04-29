import api from "../../api";
import {
  FETCH_ITEMS_AUTOCOMPLETE_SUCCESS,
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

const fetchItemsAutocompleteSuccess = items => {
  return {
    type: FETCH_ITEMS_AUTOCOMPLETE_SUCCESS,
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

  const response = await api.item.create({
    name: itemName,
    defaultItemAmountId: amount,
    itemCategoryId: category,
    defaultItemLocationId: location,
    description
  });

  const {
    code,
    messages,
    result: { errors }
  } = response;

  if (code === 201) {
    dispatch(fetchSuccess(false, messages));
  } else {
    dispatch(fetchFailure(false, errors));
  }
};

export const deleteItem = itemId => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.item.delete(itemId);

  const {
    code,
    messages,
    result: { errors }
  } = response;

  console.log(messages);

  if (code === 200) {
    dispatch(fetchSuccess(false, messages));
  } else {
    dispatch(fetchFailure(false, errors));
  }
};

export const getItems = () => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.item.getItems();
  const {
    code,
    result: { errors, items }
  } = response;

  if (code === 200) {
    dispatch(fetchItemsSuccess(items));
    dispatch(fetchSuccess(false));
  } else {
    dispatch(fetchFailure(false, errors));
  }
};

export const getItemsAutocomplete = () => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.item.getItemAutocomplete();

  if (response.data && response.data.errors) {
    dispatch(fetchFailure(false, response.data.errors));
  } else {
    dispatch(fetchItemsAutocompleteSuccess(response));
    dispatch(fetchSuccess(false));
  }
};

export const getItemCategories = () => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.category.getItemCategories();
  const {
    code,
    result: { errors, itemCategories }
  } = response;

  if (code === 200) {
    dispatch(fetchItemCategoriesSuccess(itemCategories));
    dispatch(fetchSuccess(false));
  } else {
    dispatch(fetchFailure(false, errors));
  }
};

export const getItemLocations = () => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.itemLocation.getItemLocations();
  const {
    code,
    result: { errors, itemLocations }
  } = response;

  if (code === 200) {
    dispatch(fetchItemLocationsSuccess(itemLocations));
    dispatch(fetchSuccess(false));
  } else {
    dispatch(fetchFailure(false, errors));
  }
};

export const getItemAmounts = () => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.itemAmount.getItemAmounts();
  const {
    code,
    result: { errors, itemAmounts }
  } = response;

  if (code === 200) {
    dispatch(fetchItemAmountsSuccess(itemAmounts));
    dispatch(fetchSuccess(false));
  } else {
    dispatch(fetchFailure(false, errors));
  }
};
