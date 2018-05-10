import { combineReducers } from "redux";
import { navReducer } from "./navReducer";
import { postsReducer } from "./postsReducer";
import { commentsReducer } from "./commentsReducer";

export default combineReducers({
  nav: navReducer,
  posts: postsReducer,
  comments: commentsReducer
});
