import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LandService } from "./land.service";
import { LandControllerBase } from "./base/land.controller.base";

@swagger.ApiTags("lands")
@common.Controller("lands")
export class LandController extends LandControllerBase {
  constructor(protected readonly service: LandService) {
    super(service);
  }
}
