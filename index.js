import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./components/HomePage/reducers.js";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Navigation from "./components/Navigation/Navigation.js";
// import HomePage from "./components/HomePage/HomePage.js";
// import BudgetRemaining from "./components/BudgetRemaining/BudgetRemaining.js";

// ReactDOM.render(
//   <Provider store={createStore(reducers)}>
//     <Navigation></Navigation>
//     <HomePage></HomePage>
//   </Provider>,
//   document.querySelector("#root")
// );

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
