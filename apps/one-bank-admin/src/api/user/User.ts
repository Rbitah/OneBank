import { Budget } from "../budget/Budget";
import { FinancialInsight } from "../financialInsight/FinancialInsight";
import { Notification } from "../notification/Notification";
import { Payment } from "../payment/Payment";
import { JsonValue } from "type-fest";
import { Webhook } from "../webhook/Webhook";

export type User = {
  budgets?: Array<Budget>;
  createdAt: Date;
  email: string | null;
  financialInsights?: Array<FinancialInsight>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  payments?: Array<Payment>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  webhooks?: Array<Webhook>;
};
