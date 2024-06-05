import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AuditLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="details" source="details" />
        <TextInput label="target" source="target" />
        <TextInput label="timestamp" source="timestamp" />
        <TextInput label="user_id " source="userId" />
      </SimpleForm>
    </Create>
  );
};
