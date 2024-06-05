import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BudgetServiceBase } from "./base/budget.service.base";

@Injectable()
export class BudgetService extends BudgetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
