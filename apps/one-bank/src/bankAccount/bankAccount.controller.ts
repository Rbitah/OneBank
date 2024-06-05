import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankAccountService } from "./bankAccount.service";
import { BankAccountControllerBase } from "./base/bankAccount.controller.base";

@swagger.ApiTags("bankAccounts")
@common.Controller("bankAccounts")
export class BankAccountController extends BankAccountControllerBase {
  constructor(
    protected readonly service: BankAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
