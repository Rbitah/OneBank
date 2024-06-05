import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  fromAccountId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  toAccountId?: SortOrder;
  transactionDate?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
