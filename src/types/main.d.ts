export interface ConnectionData {
  url:  string;
  auth: AuthData;
}

export interface AuthData {
  username: string;
  password: string;
}