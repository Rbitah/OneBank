import { User } from "../user/User";

export type Payment = {
  amount: string | null;
  bankAccountId: string | null;
  createdAt: Date;
  id: string;
  paymentMethod: string | null;
  scheduledDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
