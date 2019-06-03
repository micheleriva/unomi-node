export interface CreateProperties {
  itemId:           string | number;
  itemType:         string;
  version:          number;
  properties:       {[key: string]: string};
  systemProperties: {[key: string]: string};
  segments:         string[];
  scores:           {[key: string]: string};
  mergedWith:       string;
  consents:         any;
}

export interface ExistingProperties {
    itemType:     string;
    tag:          string;
    isSystemTag?: boolean;
}