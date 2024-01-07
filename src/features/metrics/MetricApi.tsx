import { ApiConfig } from "../../config/cruxApi";
import { TCruxRequest, TCruxResponse } from "../../types/cruxMetric";

ApiConfig.BuildQuery = (requestBody: TCruxRequest) => {
  try {
    return fetch(ApiConfig.API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          return Promise.reject(response as TCruxResponse);
        }
        return response as TCruxResponse;
      });
  } catch (err) {
    console.error(err);
  }
};
const metricApi = ApiConfig.BuildQuery;

export default metricApi;
