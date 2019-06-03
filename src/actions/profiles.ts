import { AxiosInstance, AxiosResponse } from "axios";
import { validateRequiredProps } from "../utils/index";
import { CreateProperties } from "../types/profiles";

type AxiosRes = Promise<AxiosResponse<any>>;

const defaultProperties: CreateProperties = {
  itemId:           undefined,
  version:          null,
  itemType:         "profile",
  properties:       undefined,
  systemProperties: {},
  segments:         [],
  scores:           {},
  mergedWith:       null,
  consents:         {}
};

export function create(axios: AxiosInstance, properties: CreateProperties): AxiosRes {
  const requiredProperties = ["itemId", "properties"];
  const propsValidation    = validateRequiredProps(requiredProperties, properties);

  if (!propsValidation.valid) {
    throw new Error(`The following properties are missing, null or undefined: ${propsValidation.missing.join(',')}`);
  }

  return axios.post(`/cxs/profiles`, Object.assign(defaultProperties, properties));
}

export function get(axios: AxiosInstance, profileId: string): AxiosRes {

  if (!profileId) {
    throw new Error(`profileId argument is missing, null or undefined.`);
  }

  return axios.get(`/cxs/profiles/${profileId}`);

}