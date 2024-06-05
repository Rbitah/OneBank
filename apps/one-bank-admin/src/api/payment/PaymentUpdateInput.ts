import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: string | null;
  bankAccountId?: string | null;
  paymentMethod?: string | null;
  scheduledDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
