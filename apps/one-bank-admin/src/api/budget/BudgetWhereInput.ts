import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetWhereInput = {
  amountSpent?: StringNullableFilter;
  category?: StringNullableFilter;
  id?: StringFilter;
  limit?: StringNullableFilter;
  period?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
