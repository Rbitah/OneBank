import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ApiIntegrationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="api_key" source="apiKey" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="endpoint" source="endpoint" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
