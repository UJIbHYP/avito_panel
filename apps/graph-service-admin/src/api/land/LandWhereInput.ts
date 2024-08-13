import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LandWhereInput = {
  area?: StringNullableFilter;
  id?: StringFilter;
  landArea?: StringNullableFilter;
  landCreatedAt?: DateTimeNullableFilter;
  landLocation?: StringNullableFilter;
  landPriceM?: StringNullableFilter;
  landPriceTotal?: StringNullableFilter;
  landUrl?: StringNullableFilter;
  location?: StringNullableFilter;
  priceM?: StringNullableFilter;
  priceTotal?: StringNullableFilter;
  url?: StringNullableFilter;
};
