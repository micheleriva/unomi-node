import axios, { AxiosInstance }       from "axios";
import * as profile                   from "./actions/profiles";
import * as rule                      from "./actions/rules";
import * as segment                   from "./actions/segments";
import { Connection, ConnectionData } from "./types/main.d";

export function connect(connectionData: ConnectionData): Connection {
  const axiosInterface: AxiosInstance = axios.create({
    auth: {
      password: connectionData.auth.password,
      username: connectionData.auth.username
    },
    baseURL: connectionData.url,
  })

  return {
    profile: {
      allProperties:       ()              => profile.allProperties(axiosInterface),
      count:               ()              => profile.count(axiosInterface),
      create:              (profileData)   => profile.create(axiosInterface, profileData),
      delete:              (profileId)     => profile.deleteProfile(axiosInterface, profileId),
      existingProperties:  (params)        => profile.existingProperties(axiosInterface, params),
      get:                 (profileId)     => profile.get(axiosInterface, profileId),
      getBySingleProperty: (params)        => profile.getBySingleProperty(axiosInterface, params),
      sessions:            (profileId)     => profile.sessions(axiosInterface, profileId),
      query:               (params, query) => profile.query(axiosInterface, params, query)
    },
    rule: {
      create: (params) => rule.create(axiosInterface, params),
      get:    (param)  => rule.get(axiosInterface, param),
      getAll: ()       => rule.getAll(axiosInterface)
    },
    segment: {
      create: (params) => segment.create(axiosInterface, params)
    }
  }
}