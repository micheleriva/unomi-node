import { AxiosResponse } from "axios";

export interface validateProps {
  valid:   boolean;
  missing: string[];
}

export type callUnomi = () => Promise<AxiosResponse<any>>;