import parser from "../utils/parser";

const BASE_URL = "https://www.reddit.com";
const BASE_PARAMS = "raw_json=1";

export const redditApi = store => next => action => {
  if (action.type === "FETCH") {
    let { url } = action;
    if (url.indexOf("?") >= 0) {
      url = `${BASE_URL + url}&${BASE_PARAMS}`;
    } else {
      url = `${BASE_URL + url}?${BASE_PARAMS}`;
    }

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(data => {
        data = parser(data);
        return next({ type: "FETCH_SUCCESS", data });
      })
      .catch(error => {
        return next({ type: "FETCH_ERROR", error });
      });
  }
  return next(action);
};
