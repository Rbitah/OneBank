import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankAccountModuleBase } from "./base/bankAccount.module.base";
import { BankAccountService } from "./bankAccount.service";
import { BankAccountController } from "./bankAccount.controller";
import { BankAccountResolver } from "./bankAccount.resolver";

@Module({
  imports: [BankAccountModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankAccountController],
  providers: [BankAccountService, BankAccountResolver],
  exports: [BankAccountService],
})
export class BankAccountModule {}
