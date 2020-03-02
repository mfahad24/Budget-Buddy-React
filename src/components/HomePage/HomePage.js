import React, { Component } from "react";
import { connect } from "react-redux";
import { weeklyBudget } from "./actions";
import "./HomePage.css";

class HomePage extends Component {
  clearInputField(props) {
    let inputField = document.querySelector("#amount");
    let errorMessage = document.querySelector(".app-error-container--message");
    inputField.value = "";
    errorMessage.innerHTML = "";
    props.weeklyBudget(0);
  }

  saveBudgetValue(props) {
    let errorMessage = document.querySelector(".app-error-container--message");
    errorMessage.innerHTML = "";
    let inputFieldValue = document.querySelector("#amount");
    //removes non-number characters in string
    let numInStringOnly = inputFieldValue.value.replace(/[^\d.-]/g, "");

    //if the final value is not a number, it will alert you
    if (!isNaN(parseInt(numInStringOnly))) {
      let fixNumberToTwoDecimals = parseFloat(numInStringOnly).toFixed(2);
      //difference between parseFloat and parseInt?
      //parseFloat takes a number and outputs parseInt
      //Number sets it back
      props.weeklyBudget(Number(fixNumberToTwoDecimals));
      inputFieldValue.value = "";
    } else {
      //this is a temporary error message

      errorMessage.innerHTML = "Please enter a number!";
      inputFieldValue.value = "";
    }
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
        <div className="app-error-container">
          <p className="app-error-container--message"></p>
        </div>
        <div className="app-button-container">
          <button
            className="app-button-submit ui primary button big"
            onClick={() => this.saveBudgetValue(this.props)}
          >
            Submit
          </button>
          <button
            className="app-button-clear ui button big"
            onClick={() => this.clearInputField(this.props)}
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
