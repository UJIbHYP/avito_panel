import * as graphql from "@nestjs/graphql";
import { AdminService } from "./admin.service";

export class AdminResolver {
  constructor(protected readonly service: AdminService) {}

  @graphql.Mutation(() => Boolean)
  async AddAddress(
    @graphql.Args("args")
    args: string
  ): Promise<boolean> {
    return this.service.AddAddress(args);
  }
}
