import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiIntegrationServiceBase } from "./base/apiIntegration.service.base";

@Injectable()
export class ApiIntegrationService extends ApiIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
