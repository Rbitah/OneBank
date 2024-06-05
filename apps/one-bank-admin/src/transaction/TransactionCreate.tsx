import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amount" source="amount" />
        <TextInput label="from_account_id " source="fromAccountId" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="to_account_id " source="toAccountId" />
        <DateTimeInput label="transaction_date" source="transactionDate" />
        <TextInput label="transaction_type" source="transactionType" />
        <TextInput label="user_id " source="userId" />
      </SimpleForm>
    </Create>
  );
};
