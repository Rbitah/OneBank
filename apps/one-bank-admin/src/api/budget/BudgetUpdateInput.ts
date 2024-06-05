import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetUpdateInput = {
  amountSpent?: string | null;
  category?: string | null;
  limit?: string | null;
  period?: string | null;
  user?: UserWhereUniqueInput | null;
};
