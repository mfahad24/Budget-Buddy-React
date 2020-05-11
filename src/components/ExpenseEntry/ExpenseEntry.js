import React, { Component } from "react";
import { connect } from "react-redux";
import { subtractFromBudget } from "../HomePage/actions";
import "./ExpenseEntry.css";

class ExpenseEntry extends Component {
  constructor() {
    super();
    this.state = {
      subtractValue: null,
    };
  }
  calculateExpense(val) {
    console.log(this.state.subtractValue);
  }
  render() {
    return (
      <div className="expense-entry-container">
        <form className="expense-entry">
          <input type="text" placeholder="Type of expense" />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.subtractValue}
          />
          <input
            type="submit"
            value="submit"
            onSubmit={this.calculateExpense()}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weeklyBudgetBank: state.weeklyBudgetBank,
  };
};

export default connect(mapStateToProps, {})(ExpenseEntry);
