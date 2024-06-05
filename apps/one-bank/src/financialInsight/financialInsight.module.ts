import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinancialInsightModuleBase } from "./base/financialInsight.module.base";
import { FinancialInsightService } from "./financialInsight.service";
import { FinancialInsightController } from "./financialInsight.controller";
import { FinancialInsightResolver } from "./financialInsight.resolver";

@Module({
  imports: [FinancialInsightModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinancialInsightController],
  providers: [FinancialInsightService, FinancialInsightResolver],
  exports: [FinancialInsightService],
})
export class FinancialInsightModule {}
