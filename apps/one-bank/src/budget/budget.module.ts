import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BudgetModuleBase } from "./base/budget.module.base";
import { BudgetService } from "./budget.service";
import { BudgetController } from "./budget.controller";
import { BudgetResolver } from "./budget.resolver";

@Module({
  imports: [BudgetModuleBase, forwardRef(() => AuthModule)],
  controllers: [BudgetController],
  providers: [BudgetService, BudgetResolver],
  exports: [BudgetService],
})
export class BudgetModule {}
