import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="app-nav">
          <div className="app-title">Budget Buddy</div>
          <div className="app-links">
            <a href="#">Home</a>
            <a href="#">Let's Budget!</a>
            <a href="#">History</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
