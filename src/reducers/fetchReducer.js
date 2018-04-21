export const fetchReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, isLoading: true };
    case "FETCH_SUCCESS":
      return { data: action.data, isLoading: false };
    case "FETCH_ERROR":
      return { data: {}, error: action.error, isLoading: false };
    default:
      return state;
  }
};
