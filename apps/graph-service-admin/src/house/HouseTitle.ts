import { House as THouse } from "../api/house/House";

export const HOUSE_TITLE_FIELD = "area";

export const HouseTitle = (record: THouse): string => {
  return record.area?.toString() || String(record.id);
};
