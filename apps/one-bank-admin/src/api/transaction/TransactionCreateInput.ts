export type TransactionCreateInput = {
  amount?: string | null;
  fromAccountId?: string | null;
  status?: "Option1" | null;
  toAccountId?: string | null;
  transactionDate?: Date | null;
  transactionType?: string | null;
  userId?: string | null;
};
