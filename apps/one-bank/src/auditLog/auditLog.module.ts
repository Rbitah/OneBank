import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuditLogModuleBase } from "./base/auditLog.module.base";
import { AuditLogService } from "./auditLog.service";
import { AuditLogController } from "./auditLog.controller";
import { AuditLogResolver } from "./auditLog.resolver";

@Module({
  imports: [AuditLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuditLogController],
  providers: [AuditLogService, AuditLogResolver],
  exports: [AuditLogService],
})
export class AuditLogModule {}
