import React, { Component } from "react";
import { connect } from "react-redux";
import "./LowBudgetAlert.css";
import { initialBudget, weeklyBudget } from "../HomePage/actions";

class LowBudgetAlert extends Component {
  renderLowBudgetAlert() {
    return (
      <div className="low-budget-alert--popup">
        <p>
          Your weekly budget has been exhausted. Would you like to budget
          another week?
        </p>
        <button
          className="low-budget-alert--restart-btn ui primary button small"
          onClick={() => this.restartBudgeting(this.props)}
        >
          Budget Another Week
        </button>
      </div>
    );
  }

  restartBudgeting(props) {
    props.initialBudget(0);
    props.weeklyBudget(0);
  }
  render() {
    if (this.props.weeklyBudgetBank < 0) {
      return this.renderLowBudgetAlert();
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    weeklyBudgetBank: state.weeklyBudgetBank,
  };
};
export default connect(mapStateToProps, { initialBudget, weeklyBudget })(
  LowBudgetAlert
);
