import { configureStore } from "@reduxjs/toolkit";
import MetricReducer from "../features/metrics/MetricSlice";
import filterReducer from "../features/filter/FilterSlice";

export const store = configureStore({
  reducer: {
    metrics: MetricReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
