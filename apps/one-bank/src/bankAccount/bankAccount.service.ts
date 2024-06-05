import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankAccountServiceBase } from "./base/bankAccount.service.base";

@Injectable()
export class BankAccountService extends BankAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
