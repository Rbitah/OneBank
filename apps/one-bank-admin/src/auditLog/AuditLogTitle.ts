import { AuditLog as TAuditLog } from "../api/auditLog/AuditLog";

export const AUDITLOG_TITLE_FIELD = "action";

export const AuditLogTitle = (record: TAuditLog): string => {
  return record.action?.toString() || String(record.id);
};
