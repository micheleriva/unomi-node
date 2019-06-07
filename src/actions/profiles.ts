import { stringify as queryStringify } from "querystring";
import { AxiosInstance } from "axios";
import { validateRequiredProps, callUnomi } from "../utils/index";
import { CreateProperties, ExistingProperties } from "../types/profiles";
import { AxiosRes } from "../types/main";
import { SdkResponse, FilteredResponse } from "../types/sdkResponse";

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
 * @returns {FilteredResponse}
 */

export function create(axios: AxiosInstance, properties: CreateProperties): FilteredResponse {
  const requiredProperties = ["itemId", "properties"];
  const propsValidation    = validateRequiredProps(requiredProperties, properties);

  if (!propsValidation.valid) {
    throw new Error(`The following properties are missing, null or undefined: ${propsValidation.missing.join(',')}`);
  }

  return callUnomi(() => axios.post(`/cxs/profiles`, Object.assign(defaultProperties, properties)));
}

/**
 * @function get
 * @param {AxiosInterface} axios
 * @param {string} profileId
 * @returns {FilteredResponse}
 */
export function get(axios: AxiosInstance, profileId: string): FilteredResponse {

  if (!profileId) {
    throw new Error(`profileId argument is missing, null or undefined.`);
  }

  return callUnomi(() => axios.get(`/cxs/profiles/${profileId}`));
}

/**
 * @function delete
 * @param {AxiosInterface} axios
 * @param {string} profileId
 * @returns {FilteredResponse}
 */
export function deleteProfile(axios: AxiosInstance, profileId: string): FilteredResponse {

  if (!profileId) {
    throw new Error(`profileId argument is missing, null or undefined.`);
  }

  return callUnomi(() =>axios.delete(`/cxs/profiles/${profileId}`), "deleteProfile");
}


/**
 * @function count
 * @param {AxiosInterface} axios
 * @returns {FilteredResponse}
 */

export function count(axios: AxiosInstance): FilteredResponse {
  return callUnomi(() => axios.get(`/cxs/profiles/count`));
}

/**
 * @function existingProperties
 * @param {AxiosInterface} axios
 * @param {ExistingProperties} params
 * @returns {AxiosRes}
 */

export function existingProperties(axios: AxiosInstance, params: ExistingProperties): FilteredResponse {
  const requiredProperties = ["tag", "itemType"];
  const propsValidation    = validateRequiredProps(requiredProperties, params);

  if (!propsValidation.valid) {
    throw new Error(`The following properties are missing, null or undefined: ${propsValidation.missing.join(',')}`);
  }

  return callUnomi(() => axios.get(`/cxs/profiles/existingProperties?${queryStringify({...params})}`));
}