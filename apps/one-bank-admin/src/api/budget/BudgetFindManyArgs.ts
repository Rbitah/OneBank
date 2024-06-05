import { BudgetWhereInput } from "./BudgetWhereInput";
import { BudgetOrderByInput } from "./BudgetOrderByInput";

export type BudgetFindManyArgs = {
  where?: BudgetWhereInput;
  orderBy?: Array<BudgetOrderByInput>;
  skip?: number;
  take?: number;
};
