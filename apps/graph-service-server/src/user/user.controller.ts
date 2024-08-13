import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserService } from "./user.service";
import { LandDto } from "./LandDto";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController {
  constructor(protected readonly service: UserService) {}

  @common.Get("/get-average-price")
  @swagger.ApiOkResponse({
    type: Number
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAveragePrice(
    @common.Body()
    body: LandDto
  ): Promise<number> {
        return this.service.GetAveragePrice(body);
      }

  @common.Get("/get-max-price")
  @swagger.ApiOkResponse({
    type: Number
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetMaxPrice(
    @common.Body()
    body: LandDto
  ): Promise<number> {
        return this.service.GetMaxPrice(body);
      }

  @common.Get("/get-min-price")
  @swagger.ApiOkResponse({
    type: Number
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetMinPrice(
    @common.Body()
    body: LandDto
  ): Promise<number> {
        return this.service.GetMinPrice(body);
      }
}
