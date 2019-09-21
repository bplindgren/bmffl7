import { User } from './user';

export class Entry {
  id: number;
  content: String;
  createdBy: User;
  createdAt: Date;
  modifiedAt: Date;
}
