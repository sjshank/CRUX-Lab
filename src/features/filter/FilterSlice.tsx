import { createSlice } from "@reduxjs/toolkit";

type TFilter = {
  formFactor: string;
  metricAbbrev: string;
  status: string;
};
const FILTER_STATE: TFilter = {
  formFactor: "ALL",
  metricAbbrev: "ALL",
  status: "",
};

// manage filters for application
const filterSlice = createSlice({
  name: "filter",
  initialState: FILTER_STATE,
  reducers: {
    // Filter : Form factor
    filterByFormFactor: (state, action) => {
      state.formFactor = action["payload"];
    },
    // Filter : Metric
    filterByMetric: (state, action) => {
      state.metricAbbrev = action["payload"];
    },
    // Filter : Good, Average, Poor
    toggleStatus: (state, action) => {
      state.status = action["payload"];
    },
    clearAllFilter: (state) => {
      state.status = "";
      state.formFactor = "ALL";
      state.metricAbbrev = "ALL";
    },
  },
});

export const {
  filterByFormFactor,
  filterByMetric,
  toggleStatus,
  clearAllFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
