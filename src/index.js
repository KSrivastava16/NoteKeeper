import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import authReducer from "./redux/auth/reducer";
import notes from "./redux/Notes/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  generalReducer: reducer,
  notesReducer: notes,
});
//
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
