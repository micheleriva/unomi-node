export type JsonGenericValue = string | number | boolean | JsonGenericProperty;
export type JsonGenericProperty = {[key: string]: JsonGenericValue};