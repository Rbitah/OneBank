import { BankAccountWhereInput } from "./BankAccountWhereInput";
import { BankAccountOrderByInput } from "./BankAccountOrderByInput";

export type BankAccountFindManyArgs = {
  where?: BankAccountWhereInput;
  orderBy?: Array<BankAccountOrderByInput>;
  skip?: number;
  take?: number;
};
