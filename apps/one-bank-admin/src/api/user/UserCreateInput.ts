import { BudgetCreateNestedManyWithoutUsersInput } from "./BudgetCreateNestedManyWithoutUsersInput";
import { FinancialInsightCreateNestedManyWithoutUsersInput } from "./FinancialInsightCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WebhookCreateNestedManyWithoutUsersInput } from "./WebhookCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  budgets?: BudgetCreateNestedManyWithoutUsersInput;
  email?: string | null;
  financialInsights?: FinancialInsightCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  webhooks?: WebhookCreateNestedManyWithoutUsersInput;
};
