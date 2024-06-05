import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  target?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
