import { SortOrder } from "../../util/SortOrder";

export type WebhookOrderByInput = {
  createdAt?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
};
