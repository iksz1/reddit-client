export const navReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVE_REDDIT":
      return { ...state, active: action.item.toLowerCase() };
    case "TOGGLE_SUB":
      const subs = state.items;
      const subreddit = action.subreddit.toLowerCase();
      let items = subs.filter(sub => sub.name !== subreddit);
      if (items.length === subs.length) {
        items.push({ name: subreddit, text: subreddit.charAt().toUpperCase() });
      }
      if (items.length > 0) return { ...state, items };
      return state;
    default:
      return state;
  }
};
