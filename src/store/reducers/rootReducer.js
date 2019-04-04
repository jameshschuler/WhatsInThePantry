import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import globalReducer from "./globalReducer";
import itemReducer from "./itemReducer";
import pantryReducer from "./pantryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
  item: itemReducer,
  pantry: pantryReducer
});

export default rootReducer;
