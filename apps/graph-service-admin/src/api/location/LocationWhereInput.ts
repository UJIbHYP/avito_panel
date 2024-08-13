import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
};
