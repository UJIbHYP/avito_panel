import { SortOrder } from "../../util/SortOrder";

export type HouseOrderByInput = {
  area?: SortOrder;
  createdAt?: SortOrder;
  houseArea?: SortOrder;
  houseCreatedAt?: SortOrder;
  houseLocation?: SortOrder;
  housePriceM?: SortOrder;
  housePriceTotal?: SortOrder;
  houseUrl?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  priceM?: SortOrder;
  priceTotal?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
