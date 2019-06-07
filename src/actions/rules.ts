import { validateRequiredProps, callUnomi } from "../utils/index";
import { FilteredResponse } from "../types/sdkResponse";
import { AxiosInstance } from "axios";

/**
 * @function create
 * @param {AxiosInstance} axios 
 * @param {object} properties 
 * @returns {FilteredResponse}
 */
export function create(axios: AxiosInstance, properties: object): FilteredResponse {
  return callUnomi(() => axios.post(`/cxs/rules`, properties), "createRule");
}

/**
 * @function getAll
 * @param {AxiosInstance} axios 
 * @returns {FilteredResponse}
 */
export function getAll(axios: AxiosInstance): FilteredResponse {
  return callUnomi(() => axios.get(`/cxs/rules`));
}

export function get(axios: AxiosInstance, rule: string): FilteredResponse {
  return callUnomi(() => axios.get(`/cxs/rules/${rule}`));
}