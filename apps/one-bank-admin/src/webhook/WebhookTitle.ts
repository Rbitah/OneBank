import { Webhook as TWebhook } from "../api/webhook/Webhook";

export const WEBHOOK_TITLE_FIELD = "eventType";

export const WebhookTitle = (record: TWebhook): string => {
  return record.eventType?.toString() || String(record.id);
};
