import { configureStore } from "@reduxjs/toolkit";
import MetricReducer from "../features/metrics/MetricSlice";
import filterReducer from "../features/filter/FilterSlice";

// configure & create store for app
export const store = configureStore({
  reducer: {
    metrics: MetricReducer, //handles metric data
    filter: filterReducer, //handles filter action
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
