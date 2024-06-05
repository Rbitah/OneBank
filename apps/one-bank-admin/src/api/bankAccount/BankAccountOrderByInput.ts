import { SortOrder } from "../../util/SortOrder";

export type BankAccountOrderByInput = {
  accountNumber?: SortOrder;
  accountType?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  idPrimaryKey?: SortOrder;
  updatedAt?: SortOrder;
};
