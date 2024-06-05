import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FinancialInsightResolverBase } from "./base/financialInsight.resolver.base";
import { FinancialInsight } from "./base/FinancialInsight";
import { FinancialInsightService } from "./financialInsight.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FinancialInsight)
export class FinancialInsightResolver extends FinancialInsightResolverBase {
  constructor(
    protected readonly service: FinancialInsightService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
