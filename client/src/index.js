import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import allReducers from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  // Chrome extension settings
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
