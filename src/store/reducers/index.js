import { combineReducers } from "redux";
import { settings } from "./settings";
import { counter } from "./counter";

const reducer = combineReducers({
  settings,
  counter
});

export default reducer