import { CACHE_SET } from "../actions";

//stores key-value pairs and expiration date
export const cacheReducer = (state = { data: {}, exp: {} }, action) => {
  switch (action.type) {
    case CACHE_SET: {
      const { key, value } = action;
      const result = { ...state };
      result.data[key] = value;
      result.exp[key] = Date.now() + 10 * 60 * 1000; //data valid for 10 minutes
      return result;
    }
    default:
      return state;
  }
};
