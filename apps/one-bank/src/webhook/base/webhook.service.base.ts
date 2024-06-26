/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Webhook as PrismaWebhook,
  User as PrismaUser,
} from "@prisma/client";

export class WebhookServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WebhookCountArgs, "select">): Promise<number> {
    return this.prisma.webhook.count(args);
  }

  async webhooks<T extends Prisma.WebhookFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookFindManyArgs>
  ): Promise<PrismaWebhook[]> {
    return this.prisma.webhook.findMany<Prisma.WebhookFindManyArgs>(args);
  }
  async webhook<T extends Prisma.WebhookFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookFindUniqueArgs>
  ): Promise<PrismaWebhook | null> {
    return this.prisma.webhook.findUnique(args);
  }
  async createWebhook<T extends Prisma.WebhookCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookCreateArgs>
  ): Promise<PrismaWebhook> {
    return this.prisma.webhook.create<T>(args);
  }
  async updateWebhook<T extends Prisma.WebhookUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookUpdateArgs>
  ): Promise<PrismaWebhook> {
    return this.prisma.webhook.update<T>(args);
  }
  async deleteWebhook<T extends Prisma.WebhookDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebhookDeleteArgs>
  ): Promise<PrismaWebhook> {
    return this.prisma.webhook.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.webhook
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
