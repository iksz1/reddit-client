export const navReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVE_REDDIT":
      return action.item.toLowerCase();
    default:
      return state;
  }
}
