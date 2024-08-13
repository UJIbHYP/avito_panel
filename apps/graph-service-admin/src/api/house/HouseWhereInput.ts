import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HouseWhereInput = {
  area?: StringNullableFilter;
  houseArea?: StringNullableFilter;
  houseCreatedAt?: DateTimeNullableFilter;
  houseLocation?: StringNullableFilter;
  housePriceM?: StringNullableFilter;
  housePriceTotal?: StringNullableFilter;
  houseUrl?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  priceM?: StringNullableFilter;
  priceTotal?: StringNullableFilter;
  url?: StringNullableFilter;
};
