import { useEffect, useState } from "react";
import { TCruxResponse, TMetricData } from "../types/cruxMetric";
import { transformData } from "../helpers/MetricData";
import MetricApi from "../features/metrics/MetricApi";
import { TFormFactor } from "../types";

export const useFetchMetrics = (urls: string[]) => {
  const [isLoading, setIsLoading] = useState(false);
  const [metricData, setMetricData] = useState<TMetricData[]>(
    [] as TMetricData[]
  );

  let promises: any = [];
  const fetchMetrics = async ({
    url,
    formFactor,
  }: {
    url: string;
    formFactor: TFormFactor;
  }) => {
    const data = await MetricApi({
      url,
      formFactor,
    })
      .then((response: TCruxResponse) => {
        return response;
      })
      .catch((response: TCruxResponse) => {
        return response;
      });

    return data as TCruxResponse;
  };
  useEffect(() => {
    if (urls.length > 0) {
      setMetricData([]);
      setIsLoading(true);
      urls.forEach((url) => {
        promises.push(
          fetchMetrics({ url: url, formFactor: "DESKTOP" }).then((data) => {
            return { ...data, url, formFactor: "DESKTOP" };
          })
        );
        promises.push(
          fetchMetrics({ url: url, formFactor: "PHONE" }).then((data) => {
            return { ...data, url, formFactor: "PHONE" };
          })
        );
      });
      Promise.all(promises)
        .then((response) => {
          const metricData = response.map((res: TCruxResponse) => {
            const { url, formFactor }: any = res as TCruxResponse;
            return transformData(res, {
              url,
              formFactor,
            });
          });
          setMetricData(metricData);
        })
        .finally(() => setIsLoading(false));
    }
  }, [urls]);

  return [metricData, isLoading] as const;
};
