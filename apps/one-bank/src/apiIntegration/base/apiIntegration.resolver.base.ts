/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { ApiIntegration } from "./ApiIntegration";
import { ApiIntegrationCountArgs } from "./ApiIntegrationCountArgs";
import { ApiIntegrationFindManyArgs } from "./ApiIntegrationFindManyArgs";
import { ApiIntegrationFindUniqueArgs } from "./ApiIntegrationFindUniqueArgs";
import { CreateApiIntegrationArgs } from "./CreateApiIntegrationArgs";
import { UpdateApiIntegrationArgs } from "./UpdateApiIntegrationArgs";
import { DeleteApiIntegrationArgs } from "./DeleteApiIntegrationArgs";
import { ApiIntegrationService } from "../apiIntegration.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApiIntegration)
export class ApiIntegrationResolverBase {
  constructor(
    protected readonly service: ApiIntegrationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ApiIntegration",
    action: "read",
    possession: "any",
  })
  async _apiIntegrationsMeta(
    @graphql.Args() args: ApiIntegrationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ApiIntegration])
  @nestAccessControl.UseRoles({
    resource: "ApiIntegration",
    action: "read",
    possession: "any",
  })
  async apiIntegrations(
    @graphql.Args() args: ApiIntegrationFindManyArgs
  ): Promise<ApiIntegration[]> {
    return this.service.apiIntegrations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ApiIntegration, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ApiIntegration",
    action: "read",
    possession: "own",
  })
  async apiIntegration(
    @graphql.Args() args: ApiIntegrationFindUniqueArgs
  ): Promise<ApiIntegration | null> {
    const result = await this.service.apiIntegration(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ApiIntegration)
  @nestAccessControl.UseRoles({
    resource: "ApiIntegration",
    action: "create",
    possession: "any",
  })
  async createApiIntegration(
    @graphql.Args() args: CreateApiIntegrationArgs
  ): Promise<ApiIntegration> {
    return await this.service.createApiIntegration({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ApiIntegration)
  @nestAccessControl.UseRoles({
    resource: "ApiIntegration",
    action: "update",
    possession: "any",
  })
  async updateApiIntegration(
    @graphql.Args() args: UpdateApiIntegrationArgs
  ): Promise<ApiIntegration | null> {
    try {
      return await this.service.updateApiIntegration({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ApiIntegration)
  @nestAccessControl.UseRoles({
    resource: "ApiIntegration",
    action: "delete",
    possession: "any",
  })
  async deleteApiIntegration(
    @graphql.Args() args: DeleteApiIntegrationArgs
  ): Promise<ApiIntegration | null> {
    try {
      return await this.service.deleteApiIntegration(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
