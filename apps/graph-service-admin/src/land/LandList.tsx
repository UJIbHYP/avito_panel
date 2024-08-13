import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LandList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Lands"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="area" source="area" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="land_area" source="landArea" />
        <TextField label="land_created_at" source="landCreatedAt" />
        <TextField label="land_location" source="landLocation" />
        <TextField label="land_price_m" source="landPriceM" />
        <TextField label="land_price_total" source="landPriceTotal" />
        <TextField label="land_url" source="landUrl" />
        <TextField label="location" source="location" />
        <TextField label="price_m" source="priceM" />
        <TextField label="price_total" source="priceTotal" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
      </Datagrid>
    </List>
  );
};
