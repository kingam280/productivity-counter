import { combineReducers } from "redux";
import { settings } from "./settings";
import { counter } from "./counter";
import { stats } from "./stats"

const reducer = combineReducers({
  settings,
  counter,
  stats
});

export default reducer