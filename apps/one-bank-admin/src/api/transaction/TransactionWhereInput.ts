import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: StringNullableFilter;
  fromAccountId?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  toAccountId?: StringNullableFilter;
  transactionDate?: DateTimeNullableFilter;
  transactionType?: StringNullableFilter;
  userId?: StringNullableFilter;
};
