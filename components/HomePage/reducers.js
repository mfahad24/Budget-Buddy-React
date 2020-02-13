import { WEEKLY_BUDGET } from "./constants";

const weeklyBudgetBank = (weeklyBudget = 0, action) => {
  if (action.type === WEEKLY_BUDGET) {
    console.log("Here is what we have submitted", action.payload);
    return action.payload;
  } else {
    return weeklyBudget;
  }
};

export default weeklyBudgetBank;
