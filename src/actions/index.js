export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";

export const NAV_TOGGLE_ITEM = "NAV_TOGGLE_ITEM";

export const CACHE_SET = "CACHE_SET";

export const fetchPosts = subreddit => ({ type: FETCH_POSTS, subreddit });
export const fetchPostsSuccess = (data, subreddit) => ({ type: FETCH_POSTS_SUCCESS, data });
export const fetchPostsError = (error, subreddit) => ({ type: FETCH_POSTS_ERROR, error });

export const fetchComments = (subreddit, postId) => ({ type: FETCH_COMMENTS, subreddit, postId });
export const fetchCommentsSuccess = data => ({ type: FETCH_COMMENTS_SUCCESS, data });
export const fetchCommentsError = error => ({ type: FETCH_COMMENTS_ERROR, error });

export const toggleNavItem = item => ({ type: NAV_TOGGLE_ITEM, item });

export const cacheSet = (key, value) => ({ type: CACHE_SET, key, value });
