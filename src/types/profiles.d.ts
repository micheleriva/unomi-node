import { JsonGenericProperty } from "./generics.d";

export interface CreateProperties {
  itemId:           string | number;
  itemType:         string;
  version:          number;
  properties:       JsonGenericProperty;
  systemProperties: JsonGenericProperty;
  segments:         string[];
  scores:           JsonGenericProperty;
  mergedWith:       string;
  consents:         any;
}

export interface ExistingProperties {
    itemType:     string;
    tag:          string;
    isSystemTag?: boolean;
}

export interface GetByProperty {
  query:         string;
  limit?:        number;
  offset?:       number;
  forceRefresh?: boolean;
}

export interface QueryConfig {
  limit?:        number;
  offset?:       number;
  forceRefresh?: boolean;
  operator:      "and" | "or";
}