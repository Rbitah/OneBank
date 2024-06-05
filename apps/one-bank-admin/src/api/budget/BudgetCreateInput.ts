import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetCreateInput = {
  amountSpent?: string | null;
  category?: string | null;
  limit?: string | null;
  period?: string | null;
  user?: UserWhereUniqueInput | null;
};
