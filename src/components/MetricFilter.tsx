import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../app/storeHooks";
import { filterByMetric } from "../features/filter/FilterSlice";
import ConnectedFilter from "./ConnectedFilter";

const METRIC_OPTIONS = [
  {
    label: "All",
    value: "ALL",
  },
  {
    label: "CLS",
    value: "CLS",
  },
  {
    label: "LCP",
    value: "LCP",
  },
  {
    label: "FID",
    value: "FID",
  },
  {
    label: "INP",
    value: "INP",
  },
];

const MetricFilter = (): JSX.Element => {
  const { metricAbbrev } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  //Handle user filter action
  const handleMetricChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
      dispatch(filterByMetric(e.currentTarget.value));
    },
    [dispatch]
  );
  const filterProps = {
    label: "Metric",
    name: "metricFilter",
    id: "metric",
    onChange: handleMetricChange,
    options: METRIC_OPTIONS,
    value: metricAbbrev,
  };
  return <ConnectedFilter {...filterProps} />;
};

export default MetricFilter;
