export type AuditLog = {
  action: string | null;
  createdAt: Date;
  details: string | null;
  id: string;
  target: string | null;
  timestamp: string | null;
  updatedAt: Date;
  userId: string | null;
};
