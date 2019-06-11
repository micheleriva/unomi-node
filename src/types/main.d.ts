import { AxiosResponse } from "axios";
import * as ProfileTypes from "./profiles.d";
import { FilteredResponse } from "./sdkResponse";

export type AxiosRes = Promise<AxiosResponse>;

export interface ConnectionData {
  url:  string;
  auth: {
    username: string;
    password: string;
  };
}

export interface Connection {
  profile: {
    create:             (profileData: ProfileTypes.CreateProperties) => FilteredResponse;
    get:                (profileId: string) => FilteredResponse;
    delete:             (profileId: string) => FilteredResponse;
    count:              () => FilteredResponse;
    existingProperties: (params: ProfileTypes.ExistingProperties) => FilteredResponse;
    allProperties:      () => FilteredResponse;
    sessions:           (profileId: string) => FilteredResponse;
    getByProperty:      (params: ProfileTypes.GetByProperty) => FilteredResponse;
  },
  segment: {
    create:             (params: object) => FilteredResponse
  },
  rule: {
    create:             (params: object) => FilteredResponse,
    getAll:             () => FilteredResponse,
    get:                (rule: string) => FilteredResponse
  }
}