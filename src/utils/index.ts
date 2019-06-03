import * as UtilsTypes from "../types/utils.d";

export function validateRequiredProps(required: string[], props: any): UtilsTypes.validateProps {

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