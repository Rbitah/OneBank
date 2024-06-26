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
  Budget as PrismaBudget,
  User as PrismaUser,
} from "@prisma/client";

export class BudgetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BudgetCountArgs, "select">): Promise<number> {
    return this.prisma.budget.count(args);
  }

  async budgets<T extends Prisma.BudgetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BudgetFindManyArgs>
  ): Promise<PrismaBudget[]> {
    return this.prisma.budget.findMany<Prisma.BudgetFindManyArgs>(args);
  }
  async budget<T extends Prisma.BudgetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BudgetFindUniqueArgs>
  ): Promise<PrismaBudget | null> {
    return this.prisma.budget.findUnique(args);
  }
  async createBudget<T extends Prisma.BudgetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BudgetCreateArgs>
  ): Promise<PrismaBudget> {
    return this.prisma.budget.create<T>(args);
  }
  async updateBudget<T extends Prisma.BudgetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BudgetUpdateArgs>
  ): Promise<PrismaBudget> {
    return this.prisma.budget.update<T>(args);
  }
  async deleteBudget<T extends Prisma.BudgetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BudgetDeleteArgs>
  ): Promise<PrismaBudget> {
    return this.prisma.budget.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.budget
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
