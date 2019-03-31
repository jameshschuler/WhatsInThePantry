import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_AMOUNTS_SUCCESS,
  FETCH_ITEM_CATEGORIES_SUCCESS,
  FETCH_ITEM_LOCATIONS_SUCCESS
} from "../types";

const initialState = {
  items: [],
  itemCategories: [],
  itemLocations: [],
  itemAmounts: []
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.items
      };
    case FETCH_ITEM_CATEGORIES_SUCCESS:
      return {
        ...state,
        itemCategories: action.itemCategories
      };
    case FETCH_ITEM_LOCATIONS_SUCCESS:
      return {
        ...state,
        itemLocations: action.itemLocations
      };
    case FETCH_ITEM_AMOUNTS_SUCCESS:
      return {
        ...state,
        itemAmounts: action.itemAmounts
      };
    default:
      return state;
  }
};

export default itemReducer;
