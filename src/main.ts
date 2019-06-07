import axios, { AxiosInstance, AxiosResponse } from "axios";
import * as profile from "./actions/profiles";
import * as MainTypes from "./types/main.d";
import * as ProfileTypes from "./types/profiles";
import { SdkResponse, FilteredResponse } from "./types/sdkResponse";

type AxiosRes = Promise<AxiosResponse>;

export function connect(connectionData: MainTypes.ConnectionData): MainTypes.Connection {
  const axiosInterface: AxiosInstance = axios.create({
    baseURL: connectionData.url,
    auth: {
      username: connectionData.auth.username,
      password: connectionData.auth.password
    }
  })

  return {
    profile: {
      create: (profileData: ProfileTypes.CreateProperties): FilteredResponse => profile.create(axiosInterface, profileData),
      get:    (profileId: string): FilteredResponse => profile.get(axiosInterface, profileId),
      delete: (profileId: string): FilteredResponse => profile.deleteProfile(axiosInterface, profileId),
      count:  (): FilteredResponse => profile.count(axiosInterface),
      existingProperties: (params: ProfileTypes.ExistingProperties): FilteredResponse => profile.existingProperties(axiosInterface, params)
    }
  }
}