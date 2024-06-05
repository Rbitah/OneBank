import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AuditLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="details" source="details" />
        <TextInput label="target" source="target" />
        <TextInput label="timestamp" source="timestamp" />
        <TextInput label="user_id " source="userId" />
      </SimpleForm>
    </Edit>
  );
};
