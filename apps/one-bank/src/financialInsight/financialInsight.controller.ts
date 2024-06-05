import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinancialInsightService } from "./financialInsight.service";
import { FinancialInsightControllerBase } from "./base/financialInsight.controller.base";

@swagger.ApiTags("financialInsights")
@common.Controller("financialInsights")
export class FinancialInsightController extends FinancialInsightControllerBase {
  constructor(
    protected readonly service: FinancialInsightService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
