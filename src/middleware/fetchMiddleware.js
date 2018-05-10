import parser from "../utils/parser";
import { selectExpDate } from "../selectors";
import {
  FETCH_POSTS,
  FETCH_COMMENTS,
  fetchPostsSuccess,
  fetchPostsError,
  fetchCommentsSuccess,
  fetchCommentsError
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

    //do nothing if cache is available
    const expires = selectExpDate(store.getState(), subreddit);
    if (expires && expires > Date.now()) return;

    const url = `${BASE_URL}/r/${subreddit}/.json?${BASE_PARAMS}`;

    apiGet(url)
      .then(json => {
        const data = parser(json);
        data.exp = Date.now() + 10 * 60 * 1000; //data valid for 10 minutes
        return next(fetchPostsSuccess(data, subreddit));
      })
      .catch(error => {
        return next(fetchPostsError(error, subreddit));
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
