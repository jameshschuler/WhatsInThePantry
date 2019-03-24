import api from "../../api";
import {
  BEGIN_FETCH,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  USER_LOGGED_IN
} from "../types";

const beginFetch = isFetching => ({
  type: BEGIN_FETCH,
  isFetching
});

const fetchSuccess = (isFetching, user) => ({
  type: FETCH_SUCCESS,
  isFetching,
  user
});

const fetchFailure = (isFetching, message, errors) => ({
  type: FETCH_FAILURE,
  isFetching,
  message,
  errors
});

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const signin = creds => async (dispatch, getState) => {
  dispatch(beginFetch(true));

  const response = await api.signin(creds);

  if (response.errors && response.errors.length > 0) {
    dispatch(fetchFailure(false, response.message, response.errors));
  } else {
    // save to local storage
    const {
      token: { token }
    } = response;
    localStorage.setItem("whatsinthepantryJWT", token);

    dispatch(fetchSuccess(false, response));
  }
};
