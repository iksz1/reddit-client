import ucf from "../utils/upperCaseFinder";

export const navReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVE_REDDIT":
      return { ...state, active: action.item.toLowerCase() };
    case "TOGGLE_SUB":
      const subs = state.items;
      const subreddit = action.subreddit;
      const mask = subreddit.toLowerCase();

      let items = subs.filter(sub => sub.name !== mask);
      if (items.length === subs.length) {
        const text = ucf(subreddit) || subreddit[0].toUpperCase();
        items.push({ name: mask, text });
      }
      if (items.length > 0) return { ...state, items };
      return state;
    default:
      return state;
  }
};
