import { TCruxApi } from "../types";

// Configuration for CRUX-API

export const ApiConfig: TCruxApi = {} as TCruxApi;

ApiConfig.API_KEY = import.meta.env.VITE_CRUX_API_KEY;
ApiConfig.API_HOST = "https://chromeuxreport.googleapis.com";
ApiConfig.API_ENDPOINT_PATH = `/v1/records:queryRecord?key=${ApiConfig.API_KEY}`;
ApiConfig.API_ENDPOINT = `${ApiConfig.API_HOST}${ApiConfig.API_ENDPOINT_PATH}`;
