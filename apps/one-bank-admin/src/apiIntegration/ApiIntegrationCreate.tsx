import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ApiIntegrationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="api_key" source="apiKey" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="endpoint" source="endpoint" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
