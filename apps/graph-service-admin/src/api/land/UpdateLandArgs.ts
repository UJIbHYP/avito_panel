import { LandWhereUniqueInput } from "./LandWhereUniqueInput";
import { LandUpdateInput } from "./LandUpdateInput";

export type UpdateLandArgs = {
  where: LandWhereUniqueInput;
  data: LandUpdateInput;
};
