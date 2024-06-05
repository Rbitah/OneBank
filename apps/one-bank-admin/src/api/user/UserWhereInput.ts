import { BudgetListRelationFilter } from "../budget/BudgetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FinancialInsightListRelationFilter } from "../financialInsight/FinancialInsightListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { WebhookListRelationFilter } from "../webhook/WebhookListRelationFilter";

export type UserWhereInput = {
  budgets?: BudgetListRelationFilter;
  email?: StringNullableFilter;
  financialInsights?: FinancialInsightListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  payments?: PaymentListRelationFilter;
  username?: StringFilter;
  webhooks?: WebhookListRelationFilter;
};
