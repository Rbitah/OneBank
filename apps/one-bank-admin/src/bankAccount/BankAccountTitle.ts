import { BankAccount as TBankAccount } from "../api/bankAccount/BankAccount";

export const BANKACCOUNT_TITLE_FIELD = "accountNumber";

export const BankAccountTitle = (record: TBankAccount): string => {
  return record.accountNumber?.toString() || String(record.id);
};
