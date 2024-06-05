import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebhookCreateInput = {
  eventType?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
