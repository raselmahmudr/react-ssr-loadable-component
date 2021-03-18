import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import "./asserts/@fontawesome-pro-5.12.0-web/css/all.css"

import { loadableReady } from '@loadable/component'

import Axios from "axios";

import reducers from "./store/reducers";
import App from './App'

const axiosInstance = Axios.create({
  baseURL: "/",
})

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers, 
  window.INITIAL_STATE, 
  composeEnhanchers(applyMiddleware(reduxThunk.withExtraArgument(axiosInstance)))
);


loadableReady(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
  );
})

if (module.hot) {
  module.hot.accept();
}

