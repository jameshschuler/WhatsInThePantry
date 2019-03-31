import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import globalReducer from "./globalReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
  item: itemReducer
});

export default rootReducer;
