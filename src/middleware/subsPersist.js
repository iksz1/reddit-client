export const subsPersist = store => next => action => {
  if (action.type !== "TOGGLE_SUB") return next(action);
  next(action);
  try {
    localStorage.setItem("subs", JSON.stringify(store.getState().nav.items));
  } catch (error) {
    console.error("Failed to save subs.");
  }
};
