import { WEEKLY_BUDGET } from "./constants";

export const weeklyBudget = budgetVal => {
  return {
    type: WEEKLY_BUDGET,
    payload: budgetVal
  };
};
