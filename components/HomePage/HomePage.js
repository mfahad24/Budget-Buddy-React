import React, { Component } from "react";
import { connect } from "react-redux";
import { weeklyBudget } from "./actions";
import "./HomePage.css";

class HomePage extends Component {
  clearInputField() {
    let inputField = document.querySelector("#amount");
    inputField.value = "";
  }

  saveBudgetValue(props) {
    // let inputFieldValue = document.querySelector("#amount");
    // props.saveBudgetValue
    // props.weeklyBudget;
    props.weeklyBudget(250);
  }

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
          <button
            className="app-button-submit ui primary button big"
            onClick={this.saveBudgetValue(this.props)}
          >
            Submit
          </button>
          <button
            className="app-button-clear ui button big"
            onClick={this.clearInputField}
          >
            Restart
          </button>
        </div>

        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { weeklyBudget })(HomePage);
