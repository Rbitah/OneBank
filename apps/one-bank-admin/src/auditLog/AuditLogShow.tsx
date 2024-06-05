import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AuditLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="action" source="action" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="details" source="details" />
        <TextField label="ID" source="id" />
        <TextField label="target" source="target" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id " source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
