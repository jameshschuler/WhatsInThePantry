import { FETCH_PANTRIES_SUCCESS } from "../types";

const initialState = {
  pantries: []
};

const pantryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PANTRIES_SUCCESS:
      return {
        ...state,
        pantries: action.pantries
      };
    default:
      return state;
  }
};

export default pantryReducer;
