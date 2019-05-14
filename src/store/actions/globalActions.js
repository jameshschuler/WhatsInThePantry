import { GLOBAL_BEGAN_FETCH, GLOBAL_ERROR, GLOBAL_SUCCESS } from "../types";

export const beginFetch = isFetching => ({
  type: GLOBAL_BEGAN_FETCH,
  isFetching
});

export const fetchFailure = (isFetching, errors) => ({
  type: GLOBAL_ERROR,
  isFetching,
  errors
});

export const fetchSuccess = (isFetching, messages) => ({
  type: GLOBAL_SUCCESS,
  isFetching,
  messages
});
