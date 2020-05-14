import {
  WEEKLY_BUDGET,
  INITIAL_BUDGET_VALUE,
  SUBTRACT_FROM_REMAINING_BUDGET,
} from "./constants";
import { combineReducers } from "redux";

const weeklyBudgetBank = (weeklyBudget = 0, action) => {
  if (action.type === WEEKLY_BUDGET) {
    return action.payload;
  } else {
    return weeklyBudget;
  }
};

const initialBudgetValue = (initialBudgetValue = 0, action) => {
  if (action.type === INITIAL_BUDGET_VALUE) {
    console.log("here it is", action.payload);
    return action.payload;
  } else {
    return initialBudgetValue;
  }
};

const budgetSubtractValue = (budgetSubtractValue = 0, action) => {
  if (action.type === SUBTRACT_FROM_REMAINING_BUDGET) {
    return action.payload;
  } else {
    return budgetSubtractValue;
  }
};

export default combineReducers({
  weeklyBudgetBank: weeklyBudgetBank,
  initialBudgetValue: initialBudgetValue,
  budgetSubtractValue: budgetSubtractValue,
});
