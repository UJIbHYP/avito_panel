import { Injectable } from "@nestjs/common";
import { LandDto } from "./LandDto";

@Injectable()
export class UserService {
  constructor() {}
  async GetAveragePrice(args: LandDto): Promise<number> {
    throw new Error("Not implemented");
  }
  async GetMaxPrice(args: LandDto): Promise<number> {
    throw new Error("Not implemented");
  }
  async GetMinPrice(args: LandDto): Promise<number> {
    throw new Error("Not implemented");
  }
}
