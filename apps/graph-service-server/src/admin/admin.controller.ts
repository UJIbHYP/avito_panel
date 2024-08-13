import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminService } from "./admin.service";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminController {
  constructor(protected readonly service: AdminService) {}

  @common.Post("/add-address")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddAddress(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.AddAddress(body);
      }
}
