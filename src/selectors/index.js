export const selectPosts = (state, subreddit) => {
  const sub = state.posts.data[subreddit];
  return sub ? sub.posts : null;
};

export const selectExpDate = (state, subreddit) => {
  const sub = state.posts.data[subreddit];
  return sub ? sub.exp : null;
};

export const selectMainPost = (state, { subreddit, postId }) => {
  const mainPost = state.comments.data.post;
  if (mainPost && mainPost.id === postId) {
    return mainPost;
  }
  const posts = selectPosts(state, subreddit);
  return posts ? posts.find(post => post.id === postId) : null;
};
