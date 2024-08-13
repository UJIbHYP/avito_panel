import { Module } from "@nestjs/common";
import { LandModuleBase } from "./base/land.module.base";
import { LandService } from "./land.service";
import { LandController } from "./land.controller";
import { LandResolver } from "./land.resolver";

@Module({
  imports: [LandModuleBase],
  controllers: [LandController],
  providers: [LandService, LandResolver],
  exports: [LandService],
})
export class LandModule {}
