import React, { Component } from "react";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="app-home-page">
        {/* <div className="app-home-page-box"> */}
        <p className="app-home-instruction">Please enter your weekly budget:</p>
        {/* <input className="app-home-input" type="number" placeholder="$"></input> */}
        <div className="app-home-input ui right labeled input">
          <label htmlFor="amount" className="ui label">
            $
          </label>
          <input type="text" placeholder="Amount" id="amount"></input>
          <div className="ui basic label">.00</div>
        </div>
        <div className="app-button-container">
          <button className="app-button-submit ui primary button big">
            Submit
          </button>
          <button className="app-button-clear ui button big">Restart</button>
        </div>

        {/* </div> */}
      </div>
    );
  }
}

export default HomePage;
