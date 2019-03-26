import {
  BEGIN_FETCH,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  USER_SIGNED_IN,
  USER_SIGNED_OUT
} from "../types";

const initialState = {
  user: null,
  isFetching: false,
  errors: null,
  message: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_FETCH:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        user: action.user,
        message: null,
        errors: null
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        message: action.message,
        errors: action.errors
      };
    case USER_SIGNED_IN:
      return {
        ...state,
        user: action.user
      };

    case USER_SIGNED_OUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
