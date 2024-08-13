import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LandServiceBase } from "./base/land.service.base";

@Injectable()
export class LandService extends LandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
