import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "message";

export const NotificationTitle = (record: TNotification): string => {
  return record.message?.toString() || String(record.id);
};
