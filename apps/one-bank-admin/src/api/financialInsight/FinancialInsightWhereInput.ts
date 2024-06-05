import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FinancialInsightWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  insightType?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
