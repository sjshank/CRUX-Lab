import { createSlice, createAsyncThunk, isAllOf } from "@reduxjs/toolkit";
import { TCruxResponse, TMetricData } from "../../types/cruxMetric";
import MetricApi from "./MetricApi";
import { transformData } from "../../helpers/MetricData";
import { TFormFactor } from "../../types";

export type TInitialState = {
  isLoading: boolean;
  metricData: TMetricData[];
};

const INIT_STATE: TInitialState = {
  isLoading: false,
  metricData: [] as TMetricData[],
};

//async crux-api all using middleware thunk
export const fetchMetrics = createAsyncThunk(
  "metrics/fetchMetrics",
  async ({ url, formFactor }: { url: string; formFactor: TFormFactor }) => {
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
  }
);

// Manage state for metric data
const metricSlice = createSlice({
  name: "metrics",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.isLoading = true;
        state.metricData = [] as TMetricData[];
      })
      .addMatcher(
        isAllOf(fetchMetrics.fulfilled, fetchMetrics.fulfilled),
        (state, action) => {
          state.isLoading = false;
          state.metricData.push(
            transformData({ ...action["payload"] }, action["meta"]["arg"])
          );
        }
      )
      .addMatcher(
        isAllOf(fetchMetrics.rejected, fetchMetrics.rejected),
        (state) => {
          state.isLoading = false;
          state.metricData = [] as TMetricData[];
        }
      );
  },
});

export default metricSlice.reducer;
