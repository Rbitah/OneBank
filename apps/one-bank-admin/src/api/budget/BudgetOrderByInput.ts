import { SortOrder } from "../../util/SortOrder";

export type BudgetOrderByInput = {
  amountSpent?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  limit?: SortOrder;
  period?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
