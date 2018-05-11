import parser from "../utils/parser";
import { getCacheExpDate, getCachedData } from "../selectors";
import {
  FETCH_POSTS,
  FETCH_COMMENTS,
  fetchPostsSuccess,
  fetchPostsError,
  fetchCommentsSuccess,
  fetchCommentsError,
  cacheSet
} from "../actions";

const BASE_URL = "https://www.reddit.com";
const BASE_PARAMS = "raw_json=1";

const apiGet = url => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.status);
  });
};

export const fetchMiddleware = store => next => action => {
  if (action.type === FETCH_POSTS) {
    const { subreddit } = action;

    //return cached data if available
    const expires = getCacheExpDate(store.getState(), subreddit);
    if (expires && expires > Date.now()) {
      const data = getCachedData(store.getState(), subreddit);
      return next(fetchPostsSuccess(data));
    }

    const url = `${BASE_URL}/r/${subreddit}/.json?${BASE_PARAMS}`;

    apiGet(url)
      .then(json => {
        const data = parser(json);
        next(cacheSet(subreddit, data)); //cache response
        return next(fetchPostsSuccess(data));
      })
      .catch(error => {
        return next(fetchPostsError(error));
      });
  }

  if (action.type === FETCH_COMMENTS) {
    const { subreddit, postId } = action;
    const url = `${BASE_URL}/r/${subreddit}/comments/${postId}/.json?${BASE_PARAMS}`;

    apiGet(url)
      .then(json => {
        const data = parser(json);
        return next(fetchCommentsSuccess(data));
      })
      .catch(error => {
        return next(fetchCommentsError(error));
      });
  }

  return next(action);
};
