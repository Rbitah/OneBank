export type Transaction = {
  amount: string | null;
  createdAt: Date;
  fromAccountId: string | null;
  id: string;
  status?: "Option1" | null;
  toAccountId: string | null;
  transactionDate: Date | null;
  transactionType: string | null;
  updatedAt: Date;
  userId: string | null;
};
