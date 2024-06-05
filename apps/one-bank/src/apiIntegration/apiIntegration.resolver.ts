import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApiIntegrationResolverBase } from "./base/apiIntegration.resolver.base";
import { ApiIntegration } from "./base/ApiIntegration";
import { ApiIntegrationService } from "./apiIntegration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApiIntegration)
export class ApiIntegrationResolver extends ApiIntegrationResolverBase {
  constructor(
    protected readonly service: ApiIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
