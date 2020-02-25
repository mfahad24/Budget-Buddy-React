import { WEEKLY_BUDGET } from "./constants";
import { combineReducers } from "redux";

const weeklyBudgetBank = (weeklyBudget = 0, action) => {
  if (action.type === WEEKLY_BUDGET) {
    return action.payload;
  } else {
    return weeklyBudget;
  }
};

export default combineReducers({
  weeklyBudgetBank: weeklyBudgetBank
});
