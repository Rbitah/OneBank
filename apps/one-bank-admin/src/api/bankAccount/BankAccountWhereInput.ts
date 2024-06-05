import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BankAccountWhereInput = {
  accountNumber?: StringNullableFilter;
  accountType?: StringNullableFilter;
  balance?: StringNullableFilter;
  id?: StringFilter;
  idPrimaryKey?: StringNullableFilter;
};
