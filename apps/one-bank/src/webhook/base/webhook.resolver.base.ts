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
import { Webhook } from "./Webhook";
import { WebhookCountArgs } from "./WebhookCountArgs";
import { WebhookFindManyArgs } from "./WebhookFindManyArgs";
import { WebhookFindUniqueArgs } from "./WebhookFindUniqueArgs";
import { CreateWebhookArgs } from "./CreateWebhookArgs";
import { UpdateWebhookArgs } from "./UpdateWebhookArgs";
import { DeleteWebhookArgs } from "./DeleteWebhookArgs";
import { User } from "../../user/base/User";
import { WebhookService } from "../webhook.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Webhook)
export class WebhookResolverBase {
  constructor(
    protected readonly service: WebhookService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "read",
    possession: "any",
  })
  async _webhooksMeta(
    @graphql.Args() args: WebhookCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Webhook])
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "read",
    possession: "any",
  })
  async webhooks(
    @graphql.Args() args: WebhookFindManyArgs
  ): Promise<Webhook[]> {
    return this.service.webhooks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Webhook, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "read",
    possession: "own",
  })
  async webhook(
    @graphql.Args() args: WebhookFindUniqueArgs
  ): Promise<Webhook | null> {
    const result = await this.service.webhook(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Webhook)
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "create",
    possession: "any",
  })
  async createWebhook(
    @graphql.Args() args: CreateWebhookArgs
  ): Promise<Webhook> {
    return await this.service.createWebhook({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Webhook)
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "update",
    possession: "any",
  })
  async updateWebhook(
    @graphql.Args() args: UpdateWebhookArgs
  ): Promise<Webhook | null> {
    try {
      return await this.service.updateWebhook({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Webhook)
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "delete",
    possession: "any",
  })
  async deleteWebhook(
    @graphql.Args() args: DeleteWebhookArgs
  ): Promise<Webhook | null> {
    try {
      return await this.service.deleteWebhook(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Webhook): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}