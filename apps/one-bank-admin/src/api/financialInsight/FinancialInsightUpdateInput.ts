import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FinancialInsightUpdateInput = {
  content?: string | null;
  insightType?: string | null;
  user?: UserWhereUniqueInput | null;
};
