import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  readStatus?: "Option1" | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
