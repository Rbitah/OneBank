import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebhookUpdateInput = {
  eventType?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
