import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HouseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Houses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="area" source="area" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="house_area" source="houseArea" />
        <TextField label="house_created_at" source="houseCreatedAt" />
        <TextField label="house_location" source="houseLocation" />
        <TextField label="house_price_m" source="housePriceM" />
        <TextField label="house_price_total" source="housePriceTotal" />
        <TextField label="house_url" source="houseUrl" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="price_m" source="priceM" />
        <TextField label="price_total" source="priceTotal" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
      </Datagrid>
    </List>
  );
};
