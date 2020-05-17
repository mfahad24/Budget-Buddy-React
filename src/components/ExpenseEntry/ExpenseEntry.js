import React, { Component } from "react";
import { connect } from "react-redux";
import { subtractFromBudget, weeklyBudget } from "../HomePage/actions";
import "./ExpenseEntry.css";

class ExpenseEntry extends Component {
  //reference for the form functions https://reactjs.org/docs/forms.html
  constructor() {
    super();
    this.state = {
      subtractValue: "",
      subtractValueType: "",
    };

    this.saveExpense = this.saveExpense.bind(this);
    this.updateStoreBudget = this.updateStoreBudget.bind(this);
  }
  saveExpense(event) {
    this.setState({
      subtractValue: event.target.value,
      subtractValueType: event.target.subtractValueType,
    });
  }

  updateStoreBudget(event) {
    event.preventDefault();
    console.log(
      "values",
      this.state.subtractValueType,
      ":",
      this.state.subtractValue
    );
    this.props.subtractFromBudget(this.state.subtractValue);
    let expenseInput = document.querySelector(".expense-entry--number");
    console.log(expenseInput);
    expenseInput.value = "";
  }
  render() {
    return (
      <div className="expense-entry-container">
        <form className="expense-entry" onSubmit={this.updateStoreBudget}>
          {/* <input
            type="text"
            placeholder="Type of expense"
            value={this.state.subtractValueType}
            onChange={this.saveExpense}
          /> */}
          <select
            value={this.state.subtractValueType}
            onChange={this.saveExpense}
            className="expense-entry--select"
          >
            {/* left off here  */}
            <option defaultValue value="---">
              Select the type of expense
            </option>
            <option value="food">Food</option>
            <option value="bills">Bills</option>
            <option value="shopping">Shopping</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            value={this.state.subtractValue}
            onChange={this.saveExpense}
            className="expense-entry--number"
          />
          <input
            type="submit"
            value="Submit"
            className="expense-entry--submit"
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

export default connect(mapStateToProps, { subtractFromBudget, weeklyBudget })(
  ExpenseEntry
);
