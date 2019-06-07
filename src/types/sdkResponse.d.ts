import { JsonGenericArrayValue } from "./generics.d";

export interface SdkResponse {
  success: boolean;
  status:  number;
  data:    JsonGenericArrayValue;
}

export type FilteredResponse = Promise<SdkResponse>;