import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "../actions";

/* 
Posts are separated by subreddits.
Previously fetched subreddits are kept for later use.
 */
export const postsReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      const result = { ...state, isLoading: true, error: null };
      result.data[action.subreddit] = {};
      return result;
    }
    case FETCH_POSTS_SUCCESS: {
      const { subreddit, data } = action;
      const result = { ...state, isLoading: false };
      result.data[subreddit] = data;
      return result;
    }
    case FETCH_POSTS_ERROR: {
      const { subreddit, error } = action;
      const result = { ...state, error, isLoading: false };
      result.data[subreddit] = {};
      return result;
    }
    default:
      return state;
  }
};
