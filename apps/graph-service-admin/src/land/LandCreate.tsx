import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="area" source="area" />
        <TextInput label="land_area" source="landArea" />
        <DateTimeInput label="land_created_at" source="landCreatedAt" />
        <TextInput label="land_location" source="landLocation" />
        <TextInput label="land_price_m" source="landPriceM" />
        <TextInput label="land_price_total" source="landPriceTotal" />
        <TextInput label="land_url" source="landUrl" />
        <TextInput label="location" source="location" />
        <TextInput label="price_m" source="priceM" />
        <TextInput label="price_total" source="priceTotal" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
