import { ApiIntegration as TApiIntegration } from "../api/apiIntegration/ApiIntegration";

export const APIINTEGRATION_TITLE_FIELD = "name";

export const ApiIntegrationTitle = (record: TApiIntegration): string => {
  return record.name?.toString() || String(record.id);
};
