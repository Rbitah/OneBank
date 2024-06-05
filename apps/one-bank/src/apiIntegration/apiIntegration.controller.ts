import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApiIntegrationService } from "./apiIntegration.service";
import { ApiIntegrationControllerBase } from "./base/apiIntegration.controller.base";

@swagger.ApiTags("apiIntegrations")
@common.Controller("apiIntegrations")
export class ApiIntegrationController extends ApiIntegrationControllerBase {
  constructor(
    protected readonly service: ApiIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
