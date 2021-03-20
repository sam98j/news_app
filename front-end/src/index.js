import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./css/index.css";
import thunk from "redux-thunk";
import {
  faPen,
  faDollarSign,
  faFootballBall,
  faPlus,
  faCalendar,
  faEye,
  faTag,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPen,
  faDollarSign,
  faFootballBall,
  faPlus,
  faCalendar,
  faEye,
  faTag,
  faTrash
);

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
