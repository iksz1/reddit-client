import { NAV_TOGGLE_ITEM } from "../actions";

//saves menu items (subs) to local storage
export const subsPersist = store => next => action => {
  if (action.type !== NAV_TOGGLE_ITEM) return next(action);

  next(action);

  try {
    localStorage.setItem("subs", JSON.stringify(store.getState().nav.items));
  } catch (error) {
    console.error("Failed to save subs.");
  }
};
