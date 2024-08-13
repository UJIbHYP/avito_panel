import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LandShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
