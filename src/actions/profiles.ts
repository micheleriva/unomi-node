import { stringify as queryStringify } from "querystring";
import { AxiosInstance, AxiosResponse } from "axios";
import { validateRequiredProps } from "../utils/index";
import { CreateProperties, ExistingProperties } from "../types/profiles";

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

/**
 * @function create
 * @param {AxiosInterface} axios
 * @param {CreateProperties} properties
 * @returns {AxiosRes}
 */

export function create(axios: AxiosInstance, properties: CreateProperties): AxiosRes {
  const requiredProperties = ["itemId", "properties"];
  const propsValidation    = validateRequiredProps(requiredProperties, properties);

  if (!propsValidation.valid) {
    throw new Error(`The following properties are missing, null or undefined: ${propsValidation.missing.join(',')}`);
  }

  return axios.post(`/cxs/profiles`, Object.assign(defaultProperties, properties));
}

/**
 * @function get
 * @param {AxiosInterface} axios
 * @param {string} profileId
 * @returns {AxiosRes}
 */
export function get(axios: AxiosInstance, profileId: string): AxiosRes {

  if (!profileId) {
    throw new Error(`profileId argument is missing, null or undefined.`);
  }

  return axios.get(`/cxs/profiles/${profileId}`);
}

/**
 * @function delete
 * @param {AxiosInterface} axios
 * @param {string} profileId
 * @returns {AxiosRes}
 */
export function deleteProfile(axios: AxiosInstance, profileId: string): AxiosRes {

  if (!profileId) {
    throw new Error(`profileId argument is missing, null or undefined.`);
  }

  return axios.delete(`/cxs/profiles/${profileId}`);
}


/**
 * @function count
 * @param {AxiosInterface} axios
 * @returns {AxiosRes}
 */

export function count(axios: AxiosInstance): AxiosRes {
  return axios.get(`/csx/profiles/count`);
}

/**
 * @function existingProperties
 * @param {AxiosInterface} axios
 * @param {ExistingProperties} params
 * @returns {AxiosRes}
 */

export function existingProperties(axios: AxiosInstance, params: ExistingProperties): AxiosRes {
  const requiredProperties = ["tag", "itemType"];
  const propsValidation    = validateRequiredProps(requiredProperties, params);

  if (!propsValidation.valid) {
    throw new Error(`The following properties are missing, null or undefined: ${propsValidation.missing.join(',')}`);
  }

  return axios.get(`/cxs/profiles/existingProperties?${queryStringify({...params})}`);
}