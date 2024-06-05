export type AuditLogCreateInput = {
  action?: string | null;
  details?: string | null;
  target?: string | null;
  timestamp?: string | null;
  userId?: string | null;
};
