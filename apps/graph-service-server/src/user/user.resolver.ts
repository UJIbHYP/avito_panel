import * as graphql from "@nestjs/graphql";
import { LandDto } from "./LandDto";
import { UserService } from "./user.service";

export class UserResolver {
  constructor(protected readonly service: UserService) {}

  @graphql.Query(() => Number)
  async GetAveragePrice(
    @graphql.Args()
    args: LandDto
  ): Promise<number> {
    return this.service.GetAveragePrice(args);
  }

  @graphql.Query(() => Number)
  async GetMaxPrice(
    @graphql.Args()
    args: LandDto
  ): Promise<number> {
    return this.service.GetMaxPrice(args);
  }

  @graphql.Query(() => Number)
  async GetMinPrice(
    @graphql.Args()
    args: LandDto
  ): Promise<number> {
    return this.service.GetMinPrice(args);
  }
}
