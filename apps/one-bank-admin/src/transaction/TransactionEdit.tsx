import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
