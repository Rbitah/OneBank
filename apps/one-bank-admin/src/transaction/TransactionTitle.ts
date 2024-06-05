import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "amount";

export const TransactionTitle = (record: TTransaction): string => {
  return record.amount?.toString() || String(record.id);
};
