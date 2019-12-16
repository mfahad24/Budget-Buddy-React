import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./components/HomePage/HomePage.js";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
