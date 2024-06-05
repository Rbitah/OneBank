import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuditLogService } from "./auditLog.service";
import { AuditLogControllerBase } from "./base/auditLog.controller.base";

@swagger.ApiTags("auditLogs")
@common.Controller("auditLogs")
export class AuditLogController extends AuditLogControllerBase {
  constructor(
    protected readonly service: AuditLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
