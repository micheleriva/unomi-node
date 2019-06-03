import axios, { AxiosInstance, AxiosResponse } from "axios";
import * as profile from "./actions/profiles";
import * as MainTypes from "./types/main.d";
import * as ProfileTypes from "./types/profiles";

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
      create: (profileData: ProfileTypes.CreateProperties): AxiosRes => profile.create(axiosInterface, profileData),
      get:    (profileId: string): AxiosRes => profile.get(axiosInterface, profileId),
      delete: (profileId: string): AxiosRes => profile.deleteProfile(axiosInterface, profileId),
      count:  (): AxiosRes => profile.count(axiosInterface),
      existingProperties: (params: ProfileTypes.ExistingProperties) => profile.existingProperties(axiosInterface, params)
    }
  }
}