export const getCachedData = (state, key) => state.cache.data[key];

export const getCacheExpDate = (state, key) => state.cache.exp[key];

export const getMainPost = (state, { subreddit, postId }) => {
  const mainPost = state.comments.data.post;
  if (mainPost && mainPost.id === postId) {
    return mainPost;
  }
  const cache = getCachedData(state, subreddit);
  return cache ? cache.posts.find(post => post.id === postId) : null;
};
