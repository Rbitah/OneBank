import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
