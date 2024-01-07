import { TStatus } from "../types";
import {
  TCruxResponse,
  TMetric,
  TMetricData,
  TMetricDataPoint,
  TMetrics,
  TPercentileStatus,
} from "../types/cruxMetric";
import { nanoid } from "nanoid";

const lblToAbbrev = {
  first_contentful_paint: "FCP",
  largest_contentful_paint: "LCP",
  first_input_delay: "FID",
  cumulative_layout_shift: "CLS",
  interaction_to_next_paint: "INP",
  experimental_time_to_first_byte: "TFB",
};

const statusToColor = Object.freeze({
  Good: "#198639",
  "Need Improvement": "#FF9B50",
  Poor: "#B31312",
});

const populateStatus = (percent: number, status: TStatus) => {
  return {
    p75: percent,
    status,
    color: statusToColor[status],
  } as TPercentileStatus;
};

const generatePercentileAndStatus = (
  abbrev: string,
  percentile: number
): TPercentileStatus => {
  switch (abbrev) {
    case "CLS":
      return percentile <= 0.1
        ? {
            ...populateStatus(percentile, "Good"),
          }
        : percentile <= 0.25
        ? {
            ...populateStatus(percentile, "Need Improvement"),
          }
        : {
            ...populateStatus(percentile, "Poor"),
          };
    case "LCP":
      return percentile <= 2500
        ? {
            ...populateStatus(percentile, "Good"),
          }
        : percentile <= 4
        ? {
            ...populateStatus(percentile, "Need Improvement"),
          }
        : {
            ...populateStatus(percentile, "Poor"),
          };

    case "FID":
      return percentile <= 100000
        ? {
            ...populateStatus(percentile, "Good"),
          }
        : percentile <= 300000
        ? {
            ...populateStatus(percentile, "Need Improvement"),
          }
        : {
            ...populateStatus(percentile, "Poor"),
          };
    case "INP":
      return percentile <= 200000
        ? {
            ...populateStatus(percentile, "Good"),
          }
        : percentile <= 500000
        ? {
            ...populateStatus(percentile, "Need Improvement"),
          }
        : {
            ...populateStatus(percentile, "Poor"),
          };
    default:
      return {
        p75: percentile,
        status: "",
        color: "#000000",
      };
  }
};

export const transformData = (
  cruxResponse: TCruxResponse,
  arg: any
): TMetricData => {
  const metricDataRecord: TMetricData = {
    recordId: nanoid(),
    formFactor: arg["formFactor"],
    url: arg["url"],
    overallSummary: {},
  } as TMetricData;

  let datapoints: TMetricDataPoint[] = [];

  if ("error" in cruxResponse) {
    return { ...metricDataRecord, error: { ...cruxResponse } };
  } else {
    const cruxRecord = cruxResponse["record"];
    metricDataRecord["collectionPeriod"] = cruxRecord["collectionPeriod"];
    const metrics = cruxRecord?.metrics;
    const _metricKeys = Object.keys(metrics);

    _metricKeys.forEach((mKey) => {
      const metricLbl = mKey as keyof TMetrics;
      const metric: TMetric = metrics[metricLbl];

      const _data: TMetricDataPoint = {
        id: lblToAbbrev[metricLbl].concat(nanoid()),
        label: metricLbl,
        abbrev: lblToAbbrev[metricLbl],
        p75: metric["percentiles"]["p75"],
        percentileStatus: generatePercentileAndStatus(
          lblToAbbrev[metricLbl],
          Number(metric["percentiles"]["p75"])
        ),
        densitiesInPercent: metric.histogram.map((bin: any) => {
          return {
            densityInPercent: bin.density * 100,
            duration:
              lblToAbbrev[metricLbl] === "CLS"
                ? Number(bin.start).toFixed(1).toString()
                : Number(bin.start) / 1000 + "s",
          };
        }),
      } as TMetricDataPoint;

      metricDataRecord["overallSummary"][_data.abbrev] = _data.percentileStatus;
      datapoints.push(_data);
    });

    datapoints = datapoints.sort((a: TMetricDataPoint, b: TMetricDataPoint) =>
      a.abbrev.localeCompare(b.abbrev)
    );

    return { ...metricDataRecord, datapoints } as TMetricData;
  }
};
