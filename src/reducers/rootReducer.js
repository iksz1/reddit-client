import { combineReducers } from "redux";
import { fetchReducer } from "./fetchReducer";
import { navReducer } from "./navReducer";

export default combineReducers({
  fetch: fetchReducer,
  nav: navReducer
});
