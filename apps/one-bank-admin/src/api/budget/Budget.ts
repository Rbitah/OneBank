import { User } from "../user/User";

export type Budget = {
  amountSpent: string | null;
  category: string | null;
  createdAt: Date;
  id: string;
  limit: string | null;
  period: string | null;
  updatedAt: Date;
  user?: User | null;
};
