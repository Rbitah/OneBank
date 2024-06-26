/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WebhookService } from "../webhook.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WebhookCreateInput } from "./WebhookCreateInput";
import { Webhook } from "./Webhook";
import { WebhookFindManyArgs } from "./WebhookFindManyArgs";
import { WebhookWhereUniqueInput } from "./WebhookWhereUniqueInput";
import { WebhookUpdateInput } from "./WebhookUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WebhookControllerBase {
  constructor(
    protected readonly service: WebhookService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Webhook })
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createWebhook(
    @common.Body() data: WebhookCreateInput
  ): Promise<Webhook> {
    return await this.service.createWebhook({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        eventType: true,
        id: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Webhook] })
  @ApiNestedQuery(WebhookFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async webhooks(@common.Req() request: Request): Promise<Webhook[]> {
    const args = plainToClass(WebhookFindManyArgs, request.query);
    return this.service.webhooks({
      ...args,
      select: {
        createdAt: true,
        eventType: true,
        id: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Webhook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async webhook(
    @common.Param() params: WebhookWhereUniqueInput
  ): Promise<Webhook | null> {
    const result = await this.service.webhook({
      where: params,
      select: {
        createdAt: true,
        eventType: true,
        id: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Webhook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateWebhook(
    @common.Param() params: WebhookWhereUniqueInput,
    @common.Body() data: WebhookUpdateInput
  ): Promise<Webhook | null> {
    try {
      return await this.service.updateWebhook({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          eventType: true,
          id: true,
          updatedAt: true,
          url: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Webhook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Webhook",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWebhook(
    @common.Param() params: WebhookWhereUniqueInput
  ): Promise<Webhook | null> {
    try {
      return await this.service.deleteWebhook({
        where: params,
        select: {
          createdAt: true,
          eventType: true,
          id: true,
          updatedAt: true,
          url: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
