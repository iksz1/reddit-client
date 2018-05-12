import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import { fetchMiddleware } from "./middleware/fetchMiddleware";
import { subsPersist } from "./middleware/subsPersist";

const DEFAULT_SUBS = [
  { name: "javascript", text: "J" },
  { name: "reactjs", text: "R" },
  { name: "webdev", text: "W" }
];

const loadSubs = () => {
  try {
    const subs = localStorage.getItem("subs");
    if (subs) {
      return JSON.parse(subs);
    }
    return DEFAULT_SUBS;
  } catch (error) {
    return DEFAULT_SUBS;
  }
};

const initStore = () => {
  const preloadedState = { nav: { items: loadSubs() } };
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(fetchMiddleware, subsPersist))
  );
};

export default initStore;
