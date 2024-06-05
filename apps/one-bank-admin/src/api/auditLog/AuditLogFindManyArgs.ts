import { AuditLogWhereInput } from "./AuditLogWhereInput";
import { AuditLogOrderByInput } from "./AuditLogOrderByInput";

export type AuditLogFindManyArgs = {
  where?: AuditLogWhereInput;
  orderBy?: Array<AuditLogOrderByInput>;
  skip?: number;
  take?: number;
};
