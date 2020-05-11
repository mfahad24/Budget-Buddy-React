import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./components/HomePage/HomePage.js";
import BudgetRemaining from "./components/BudgetRemaining/BudgetRemaining.js";
import InitialBudget from "./components/InitialBudget/InitialBudget.js";
import ExpenseEntry from "./components/ExpenseEntry/ExpenseEntry.js";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="App--budget-tickers">
        <BudgetRemaining></BudgetRemaining>
        <InitialBudget></InitialBudget>
      </div>
      <ExpenseEntry></ExpenseEntry>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
