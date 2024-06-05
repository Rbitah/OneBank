import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuditLogServiceBase } from "./base/auditLog.service.base";

@Injectable()
export class AuditLogService extends AuditLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
