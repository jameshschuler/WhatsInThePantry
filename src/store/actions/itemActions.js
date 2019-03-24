import api from "../../api/api";
import {
  BEGIN_FETCH_ITEMS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS
} from "../types";

const beginFetchItems = isFetching => ({
  type: BEGIN_FETCH_ITEMS,
  isFetching
});

const fetchItemsSuccess = (isFetching, items) => ({
  type: FETCH_ITEMS_SUCCESS,
  isFetching,
  items
});

const fetchItemsFailure = (isFetching, message, errors) => ({
  type: FETCH_ITEMS_FAILURE,
  isFetching,
  message,
  errors
});

export const getItems = () => async (dispatch, getState) => {
  dispatch(beginFetchItems(true));

  const response = await api.getItems();

  if (response.errors && response.errors.length > 0) {
    dispatch(fetchItemsFailure(false, response.message, response.errors));
  } else {
    dispatch(fetchItemsSuccess(false, response));
  }
};
