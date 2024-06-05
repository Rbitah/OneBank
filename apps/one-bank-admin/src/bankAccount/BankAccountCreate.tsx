import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BankAccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="account_number" source="accountNumber" />
        <TextInput label="account_type" source="accountType" />
        <TextInput label="balance" source="balance" />
        <TextInput label="id (Primary Key)" source="idPrimaryKey" />
      </SimpleForm>
    </Create>
  );
};
