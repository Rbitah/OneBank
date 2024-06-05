import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApiIntegrationModuleBase } from "./base/apiIntegration.module.base";
import { ApiIntegrationService } from "./apiIntegration.service";
import { ApiIntegrationController } from "./apiIntegration.controller";
import { ApiIntegrationResolver } from "./apiIntegration.resolver";

@Module({
  imports: [ApiIntegrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApiIntegrationController],
  providers: [ApiIntegrationService, ApiIntegrationResolver],
  exports: [ApiIntegrationService],
})
export class ApiIntegrationModule {}
