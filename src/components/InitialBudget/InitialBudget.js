import React, { Component } from "react";
import { connect } from "react-redux";
import "./InitialBudget.css";

class InitialBudget extends Component {
  render() {
    return (
      <div className="app-initial-budget">
        <p className="app-initial-budget--title">Starting Budget</p>
        <p className="app-initial-budget--value">
          {"$" +
            this.props.initialBudgetValue
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>

        {/* phantom div */}
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { initialBudgetValue: state.initialBudgetValue };
};

export default connect(mapStateToProps, {})(InitialBudget);
