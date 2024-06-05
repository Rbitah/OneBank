import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  readStatus?: "Option1" | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
};
