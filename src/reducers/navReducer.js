import ucf from "../utils/upperCaseFinder";
import { NAV_TOGGLE_ITEM } from "../actions";

export const navReducer = (state = {}, action) => {
  switch (action.type) {
    case NAV_TOGGLE_ITEM:
      const subs = state.items;
      const item = action.item;
      const mask = item.toLowerCase();

      let items = subs.filter(sub => sub.name !== mask);
      if (items.length === subs.length) {
        const text = ucf(item) || item[0].toUpperCase(); //letter to use for menu
        items.push({ name: mask, text });
      }
      if (items.length > 0) return { ...state, items }; //at least 1 item must be present
      return state;
    default:
      return state;
  }
};
