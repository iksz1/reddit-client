import { combineReducers } from "redux";
import { navReducer } from "./navReducer";
import { postsReducer } from "./postsReducer";
import { commentsReducer } from "./commentsReducer";
import { cacheReducer } from "./cacheReducer";

export default combineReducers({
  nav: navReducer,
  posts: postsReducer,
  comments: commentsReducer,
  cache: cacheReducer
});
