import { AxiosResponse } from "axios";
import * as ProfileTypes from "./profiles.d";

export type AxiosRes = Promise<AxiosResponse>;

export interface ConnectionData {
  url:  string;
  auth: {
    username: string;
    password: string;
  };
}

export interface Connection {
  profile: ProfileConnection
}

export interface ProfileConnection {
  create:             (profileData: ProfileTypes.CreateProperties) => AxiosRes;
  get:                (profileId: string) => AxiosRes;
  delete:             (profileId: string) => AxiosRes;
  count:              () => AxiosRes;
  existingProperties: (params: ProfileTypes.ExistingProperties) => AxiosRes;
}