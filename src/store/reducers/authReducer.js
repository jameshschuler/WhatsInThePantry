import { BEGIN_FETCH, FETCH_FAILURE, FETCH_SUCCESS } from "../types";

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

    default:
      return state;
  }
};

export default authReducer;
