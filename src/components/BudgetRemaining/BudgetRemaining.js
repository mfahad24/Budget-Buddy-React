import React, { Component } from "react";
import { connect } from "react-redux";
import "./BudgetRemaining.css";

class BudgetRemaining extends Component {
  render() {
    return (
      <div className="app-budget-remaining">
        <p className="app-budget-remaining--title">Remaining Budget</p>
        <p className="app-budget-remaining--value">
          {"$" +
            this.props.weeklyBudgetBank
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          {/* https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */}
        </p>

        <div></div>
        {/* phantom div */}
        {/* <p className="app-budget-remaining--instruction">
          Please select purchase category:
        </p> */}
        {/* DROPDOWN START*/}
        {/* <div class="ui selection dropdown">
          <input type="hidden" name="gender"></input>
          <i class="dropdown icon"></i>
          <div class="default text">Gender</div>
          <div class="menu">
            <div class="item" data-value="1">
              Male
            </div>
            <div class="item" data-value="0">
              Female
            </div>
          </div>
        </div> */}
        {/* DROPDOWN END */}
        {/* <div className="app-budget-remaining--expense-type ui input">
          <input type="text" placeholder="What is the expense?"></input>
        </div>
        <div className="app-budget-remaining--expense-amount ui right labeled input">
          <label htmlFor="cost" className="ui label">
            $
          </label>
          <input type="text" placeholder="How much is it?" id="amount"></input>
          <div className="ui basic label">.00</div>
        </div>
        <div className="app-button-container">
          <button className="app-button-submit ui primary button big">
            Submit
          </button>
        </div>
        <p className="app-budget-remaining--title">Budget Spent</p> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weeklyBudgetBank: state.weeklyBudgetBank
  };
};

export default connect(mapStateToProps, {})(BudgetRemaining);
// export default BudgetRemaining;
