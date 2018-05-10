import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/rootReducer";
import { fetchMiddleware } from "./middleware/fetchMiddleware";
import { subsPersist } from "./middleware/subsPersist";
import { initStore } from "./store";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initStore, composeEnhancers(applyMiddleware(fetchMiddleware, subsPersist)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
