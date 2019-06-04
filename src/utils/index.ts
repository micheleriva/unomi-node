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