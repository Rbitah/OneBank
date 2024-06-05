import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuditLogWhereInput = {
  action?: StringNullableFilter;
  details?: StringNullableFilter;
  id?: StringFilter;
  target?: StringNullableFilter;
  timestamp?: StringNullableFilter;
  userId?: StringNullableFilter;
};
