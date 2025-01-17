import { AxiosResponse } from "axios";
import * as ProfileTypes from "./profiles.d";
import { QueryParams } from "../types/queryBuilder"
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
    create:              (profileData: ProfileTypes.CreateProperties)             => FilteredResponse;
    get:                 (profileId: string)                                      => FilteredResponse;
    delete:              (profileId: string)                                      => FilteredResponse;
    count:               ()                                                       => FilteredResponse;
    existingProperties:  (params: ProfileTypes.ExistingProperties)                => FilteredResponse;
    allProperties:       ()                                                       => FilteredResponse;
    sessions:            (profileId: string)                                      => FilteredResponse;
    getBySingleProperty: (params: ProfileTypes.GetByProperty)                     => FilteredResponse;
    query:               (params: ProfileTypes.QueryConfig, query: QueryParams[]) => FilteredResponse
  },
  segment: {
    create:             (params: object) => FilteredResponse
  },
  rule: {
    create:             (params: object) => FilteredResponse,
    getAll:             ()               => FilteredResponse,
    get:                (rule: string)   => FilteredResponse
  }
}