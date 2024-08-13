import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const HouseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="area" source="area" />
        <TextInput label="house_area" source="houseArea" />
        <DateTimeInput label="house_created_at" source="houseCreatedAt" />
        <TextInput label="house_location" source="houseLocation" />
        <TextInput label="house_price_m" source="housePriceM" />
        <TextInput label="house_price_total" source="housePriceTotal" />
        <TextInput label="house_url" source="houseUrl" />
        <TextInput label="location" source="location" />
        <TextInput label="price_m" source="priceM" />
        <TextInput label="price_total" source="priceTotal" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
