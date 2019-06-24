import { FilteredResponse } from "../types/sdkResponse";
import * as UtilsTypes from "../types/utils.d";

/**
 * @function validateRequiredProps
 * @param {string[]} required
 * @param {{[key: string]: any}} props
 */
export function validateRequiredProps(required: string[], props: {[key: string]: any}): UtilsTypes.validateProps {

  let missing = [];

  for (const prop of required) {
    if (!Object.keys(props).includes(prop) 
      || props[prop] === null 
      || props[prop] === undefined) {
      missing.push(prop)
    }
  }

  return {
    valid: !missing.length,
    missing,
  }
}

/**
 * @function callUnomi
 * @param {UtilsTypes.callUnomi} axiosInstance
 * @param {string} method 
 * @returns {FilteredResponse}
 */

export function callUnomi(axiosInstance: UtilsTypes.callUnomi, method?: string): FilteredResponse {

  let validStatus: number;

  switch(method) {
    case "createRule":
    case "deleteProfile":
      validStatus = 204;
      break;
    default:
      validStatus = 200;
      break;
  }

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance();

      resolve({
        success: (response.status === validStatus),
        status: response.status,
        data: response.data
      });

    } catch (err) {

      reject({
        success: false,
        status: err.response ? err.response.status : null,
        data: err.response ? err.response.statusText : null
      });

    }
  });
}