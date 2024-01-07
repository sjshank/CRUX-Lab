import { TCruxRequest } from "./cruxMetric";

export type TFormFactor = "DESKTOP" | "PHONE";
export type TStatus = "Good" | "Need Improvement" | "Poor";

export type TCruxApi = {
  API_KEY: string;
  API_HOST: string;
  API_ENDPOINT_PATH: string;
  API_ENDPOINT: string;
  BuildQuery: (requestBody: TCruxRequest) => any;
};
