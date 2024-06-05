import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FinancialInsightCreateInput = {
  content?: string | null;
  insightType?: string | null;
  user?: UserWhereUniqueInput | null;
};
