import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BankAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="account_number" source="accountNumber" />
        <TextInput label="account_type" source="accountType" />
        <TextInput label="balance" source="balance" />
        <TextInput label="id (Primary Key)" source="idPrimaryKey" />
      </SimpleForm>
    </Edit>
  );
};
