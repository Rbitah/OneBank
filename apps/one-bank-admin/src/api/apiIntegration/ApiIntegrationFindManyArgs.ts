import { ApiIntegrationWhereInput } from "./ApiIntegrationWhereInput";
import { ApiIntegrationOrderByInput } from "./ApiIntegrationOrderByInput";

export type ApiIntegrationFindManyArgs = {
  where?: ApiIntegrationWhereInput;
  orderBy?: Array<ApiIntegrationOrderByInput>;
  skip?: number;
  take?: number;
};
