import { User } from "../user/User";

export type FinancialInsight = {
  content: string | null;
  createdAt: Date;
  id: string;
  insightType: string | null;
  updatedAt: Date;
  user?: User | null;
};
