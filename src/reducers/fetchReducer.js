export const fetchReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH":
      return { ...state, isLoading: true }
    case "FETCH_SUCCESS":
      return { data: action.data, isLoading: false }
    case "FETCH_ERROR":
      return { error: action.error, isLoading: false }
    default:
      return state;
  }
}