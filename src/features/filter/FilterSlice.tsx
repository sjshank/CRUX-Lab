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

const filterSlice = createSlice({
  name: "filter",
  initialState: FILTER_STATE,
  reducers: {
    filterByFormFactor: (state, action) => {
      state.formFactor = action["payload"];
    },
    filterByMetric: (state, action) => {
      state.metricAbbrev = action["payload"];
    },
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
