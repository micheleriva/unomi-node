export interface CreateProperties {
  itemId:           string | number;
  itemType:         string;
  version:          number;
  properties:       any;
  systemProperties: any;
  segments:         any[];
  scores:           any;
  mergedWith:       string;
  consents:         any;
}

export interface ExistingProperties {
  itemType:     string;
  tag:          string;
  isSystemTag?: boolean;
}