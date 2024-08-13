import * as graphql from "@nestjs/graphql";
import { LandResolverBase } from "./base/land.resolver.base";
import { Land } from "./base/Land";
import { LandService } from "./land.service";

@graphql.Resolver(() => Land)
export class LandResolver extends LandResolverBase {
  constructor(protected readonly service: LandService) {
    super(service);
  }
}
