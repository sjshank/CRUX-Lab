import { useEffect, useState } from "react";
import { TCruxResponse, TMetricData } from "../types/cruxMetric";
import { useAppDispatch } from "../app/storeHooks";
import { fetchMetrics } from "../features/metrics/MetricSlice";
import { transformData } from "../helpers/MetricData";

export const useFetchMetrics = (urls: string[]) => {
  const [isLoading, setIsLoading] = useState(false);
  const [metricData, setMetricData] = useState<TMetricData[]>(
    [] as TMetricData[]
  );
  const dispatch = useAppDispatch();

  let promises: any = [];
  useEffect(() => {
    if (urls.length > 0) {
      setMetricData([]);
      setIsLoading(true);
      urls.forEach((url) => {
        promises.push(
          dispatch(fetchMetrics({ url: url, formFactor: "DESKTOP" }))
            .unwrap()
            .then((data) => {
              return { ...data, url, formFactor: "DESKTOP" };
            })
        );
        promises.push(
          dispatch(fetchMetrics({ url: url, formFactor: "PHONE" }))
            .unwrap()
            .then((data) => {
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
