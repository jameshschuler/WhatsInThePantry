import { GLOBAL_BEGAN_FETCH, GLOBAL_ERROR, GLOBAL_SUCCESS } from "../types";

const initialState = {
  isFetching: false,
  errors: null,
  message: null
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_BEGAN_FETCH:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case GLOBAL_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.errors
      };
    case GLOBAL_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        message: action.message,
        errors: null
      };
    default:
      return state;
  }
};

export default globalReducer;
