import api from "../../api";
import setAuthorizationHeader from "../../api/setAuthorizationHeader";
import {
  BEGIN_FETCH,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  USER_SIGNED_IN,
  USER_SIGNED_OUT
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

export const userSignedIn = user => ({
  type: USER_SIGNED_IN,
  user
});

export const userSignedOut = () => ({
  type: USER_SIGNED_OUT
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
    setAuthorizationHeader(token);

    dispatch(fetchSuccess(false, response));
  }
};

export const signout = () => dispatch => {
  localStorage.removeItem("whatsinthepantryJWT");
  dispatch(userSignedOut());
};

export const me = () => async dispatch => {
  dispatch(beginFetch(true));

  const response = await api.me();

  if (
    response.data &&
    response.data.errors &&
    response.data.errors.length > 0
  ) {
    if (response.status === 401) {
      localStorage.removeItem("whatsinthepantryJWT");
      dispatch(userSignedOut());
    }

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
