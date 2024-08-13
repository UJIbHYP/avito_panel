import { Land as TLand } from "../api/land/Land";

export const LAND_TITLE_FIELD = "area";

export const LandTitle = (record: TLand): string => {
  return record.area?.toString() || String(record.id);
};
