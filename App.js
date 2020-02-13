import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./components/HomePage/HomePage.js";
import BudgetRemaining from "./components/BudgetRemaining/BudgetRemaining.js";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <HomePage></HomePage>
      {/* <BudgetRemaining></BudgetRemaining> */}
    </div>
  );
}

export default App;
