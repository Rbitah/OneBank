import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialInsightServiceBase } from "./base/financialInsight.service.base";

@Injectable()
export class FinancialInsightService extends FinancialInsightServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
