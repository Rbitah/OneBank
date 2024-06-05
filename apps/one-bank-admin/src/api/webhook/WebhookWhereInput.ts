import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebhookWhereInput = {
  eventType?: StringNullableFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
