import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { BankAccountModule } from "./bankAccount/bankAccount.module";
import { TransactionModule } from "./transaction/transaction.module";
import { PaymentModule } from "./payment/payment.module";
import { NotificationModule } from "./notification/notification.module";
import { BudgetModule } from "./budget/budget.module";
import { FinancialInsightModule } from "./financialInsight/financialInsight.module";
import { ApiIntegrationModule } from "./apiIntegration/apiIntegration.module";
import { WebhookModule } from "./webhook/webhook.module";
import { AuditLogModule } from "./auditLog/auditLog.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    BankAccountModule,
    TransactionModule,
    PaymentModule,
    NotificationModule,
    BudgetModule,
    FinancialInsightModule,
    ApiIntegrationModule,
    WebhookModule,
    AuditLogModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
