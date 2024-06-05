import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "amount";

export const PaymentTitle = (record: TPayment): string => {
  return record.amount?.toString() || String(record.id);
};
