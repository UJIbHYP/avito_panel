import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
