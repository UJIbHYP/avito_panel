import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService {
  constructor() {}
  async AddAddress(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
