import { FETCH_PANTRIES_SUCCESS, FETCH_PANTRY_ITEMS_SUCCESS } from "../types";

const initialState = {
  pantries: [],
  pantryItems: []
};

const pantryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PANTRIES_SUCCESS:
      return {
        ...state,
        pantries: action.pantries
      };
    case FETCH_PANTRY_ITEMS_SUCCESS:
      return {
        ...state,
        pantryItems: action.pantryItems
      };
    default:
      return state;
  }
};

export default pantryReducer;
