import { BudgetUpdateManyWithoutUsersInput } from "./BudgetUpdateManyWithoutUsersInput";
import { FinancialInsightUpdateManyWithoutUsersInput } from "./FinancialInsightUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WebhookUpdateManyWithoutUsersInput } from "./WebhookUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  budgets?: BudgetUpdateManyWithoutUsersInput;
  email?: string | null;
  financialInsights?: FinancialInsightUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  payments?: PaymentUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  webhooks?: WebhookUpdateManyWithoutUsersInput;
};
