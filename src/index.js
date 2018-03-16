import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { redditApi } from "./middleware/redditApi";
import { subsPersist } from "./middleware/subsPersist";
import { initStore } from "./store";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(reducers),
  initStore,
  composeEnhancers(applyMiddleware(redditApi, subsPersist))
);

// const store = createStore(
//   combineReducers(reducers),
//   {},
//   applyMiddleware(redditApi)
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
