import { ApiConfig } from "../../config/cruxApi";
import { TCruxRequest, TCruxResponse } from "../../types/cruxMetric";

// Build CRUX API query using request body
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
const MetricApi = ApiConfig.BuildQuery;

export default MetricApi;
