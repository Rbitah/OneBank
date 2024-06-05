import { User } from "../user/User";

export type Webhook = {
  createdAt: Date;
  eventType: string | null;
  id: string;
  updatedAt: Date;
  url: string | null;
  user?: User | null;
};
