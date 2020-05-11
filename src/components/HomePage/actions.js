import {
  WEEKLY_BUDGET,
  INITIAL_BUDGET_VALUE,
  SUBTRACT_FROM_REMAINING_BUDGET,
} from "./constants";

export const weeklyBudget = (budgetVal) => {
  return {
    type: WEEKLY_BUDGET,
    payload: budgetVal,
  };
};

export const initialBudget = (initialValue) => {
  return {
    type: INITIAL_BUDGET_VALUE,
    payload: initialValue,
  };
};

export const subtractFromBudget = (subtractVal) => {
  return {
    type: SUBTRACT_FROM_REMAINING_BUDGET,
    payload: subtractVal,
  };
};
