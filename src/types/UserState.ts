import { User } from "./User";

export interface UserState {
    users: User[];
    filteredUsers: User[];
    loading: boolean;
  }