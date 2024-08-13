import { LandWhereInput } from "./LandWhereInput";
import { LandOrderByInput } from "./LandOrderByInput";

export type LandFindManyArgs = {
  where?: LandWhereInput;
  orderBy?: Array<LandOrderByInput>;
  skip?: number;
  take?: number;
};
