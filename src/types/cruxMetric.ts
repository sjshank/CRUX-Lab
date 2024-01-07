import { TFormFactor } from ".";

export type TCruxRecord = {
  key: TRecordKey;
  metrics: TMetrics;
  collectionPeriod: TPeriodCollection;
};

export type TRecordKey = {
  formFactor?: string;
  url?: string;
  origin?: string;
};

export type TMetrics = {
  cumulative_layout_shift: TMetric;
  first_contentful_paint: TMetric;
  first_input_delay: TMetric;
  interaction_to_next_paint: TMetric;
  largest_contentful_paint: TMetric;
  experimental_time_to_first_byte: TMetric;
};

export type TMetric = {
  histogram: TBin[];
  percentiles: TPercentile;
};

export type TBin = {
  start: string;
  end: string;
  density: number;
};

export type TPercentile = {
  p75: string;
};

export type TPeriodCollection = {
  firstDate: TPeriod;
  lastDate: TPeriod;
};

type TPeriod = {
  year: number;
  month: number;
  day: number;
};

export type TCruxErrorResponse = {
  error: {
    message: string;
  };
};

export type TCruxRequest = {
  formFactor: TFormFactor;
  origin?: string;
  url?: string;
  metrics?:
    | (
        | "cumulative_layout_shift"
        | "first_contentful_paint"
        | "first_input_delay"
        | "interaction_to_next_paint"
        | "largest_contentful_paint"
        | "experimental_time_to_first_byte"
      )[]
    | [];
  effectiveConnectionType?: ("offline" | "slow-2G" | "2G" | "3G" | "4G")[];
};

export type TCruxDataResponse = {
  record: TCruxRecord;
};

export type TCruxResponse = TCruxDataResponse | TCruxErrorResponse;

export type TPercentileStatus = {
  p75: number;
  status: string;
  color: string;
};

export type TMetricData = {
  recordId: string;
  formFactor: TFormFactor;
  url: string;
  overallSummary: any;
  collectionPeriod: TPeriodCollection;
  datapoints: TMetricDataPoint[];
  error?: TCruxErrorResponse;
};

export type TMetricDataPoint = {
  id: string;
  label: string;
  abbrev: string;
  p75: string;
  percentileStatus: TPercentileStatus;
  densitiesInPercent: TDensitiesInPercent[];
};

export type TDensitiesInPercent = {
  densityInPercent: number;
  duration: string;
};
