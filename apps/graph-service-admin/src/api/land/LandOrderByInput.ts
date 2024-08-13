import { SortOrder } from "../../util/SortOrder";

export type LandOrderByInput = {
  area?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  landArea?: SortOrder;
  landCreatedAt?: SortOrder;
  landLocation?: SortOrder;
  landPriceM?: SortOrder;
  landPriceTotal?: SortOrder;
  landUrl?: SortOrder;
  location?: SortOrder;
  priceM?: SortOrder;
  priceTotal?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
