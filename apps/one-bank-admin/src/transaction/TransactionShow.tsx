import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="from_account_id " source="fromAccountId" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="to_account_id " source="toAccountId" />
        <TextField label="transaction_date" source="transactionDate" />
        <TextField label="transaction_type" source="transactionType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id " source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
