import { validateRequiredProps, callUnomi } from "../utils/index";
import { FilteredResponse } from "../types/sdkResponse";
import { AxiosInstance } from "axios";

export function create(axios: AxiosInstance, properties: object): FilteredResponse {
  return callUnomi(() => axios.post(`/cxs/segments`, properties));
}