import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  readStatus?: "Option1";
  typeField?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
