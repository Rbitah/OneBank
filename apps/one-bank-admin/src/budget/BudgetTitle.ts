import { Budget as TBudget } from "../api/budget/Budget";

export const BUDGET_TITLE_FIELD = "amountSpent";

export const BudgetTitle = (record: TBudget): string => {
  return record.amountSpent?.toString() || String(record.id);
};
