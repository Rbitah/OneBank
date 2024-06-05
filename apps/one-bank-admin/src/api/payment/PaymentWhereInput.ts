import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: StringNullableFilter;
  bankAccountId?: StringNullableFilter;
  id?: StringFilter;
  paymentMethod?: StringNullableFilter;
  scheduledDate?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
