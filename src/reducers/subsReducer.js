export const subsReducer = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_SUBS":
      const subs = state.items;
      const subreddit = action.subreddit.toLowerCase();
      let items = subs.filter(sub => sub.name !== subreddit);
      if (items.length === subs.length) {
        items.push({ name: subreddit, text: subreddit.charAt().toUpperCase()});
      }
      return { items }
    default:
      return state;
  }
}
