export const navReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVE_REDDIT":
      return { ...state, active: action.item.toLowerCase() };
    case "TOGGLE_SUBS":
      const subs = state.items;
      const subreddit = action.subreddit.toLowerCase();
      let items = subs.filter(sub => sub.name !== subreddit);
      if (items.length === subs.length) {
        items.push({ name: subreddit, text: subreddit.charAt().toUpperCase() });
      }
      return { ...state, items };
    default:
      return state;
  }
};
