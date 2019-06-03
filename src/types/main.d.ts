export interface ConnectionData {
  url:  string;
  auth: AuthData;
}

export interface AuthData {
  username: string;
  password: string;
}

export interface Connection {
  profile: ProfileConnection
}

export interface ProfileConnection {
  create: Function;
  get:    Function
}