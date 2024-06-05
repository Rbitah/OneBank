import { FinancialInsightWhereInput } from "./FinancialInsightWhereInput";
import { FinancialInsightOrderByInput } from "./FinancialInsightOrderByInput";

export type FinancialInsightFindManyArgs = {
  where?: FinancialInsightWhereInput;
  orderBy?: Array<FinancialInsightOrderByInput>;
  skip?: number;
  take?: number;
};
