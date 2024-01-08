import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/FilterSlice";

// configure & create store for app
export const store = configureStore({
  reducer: {
    filter: filterReducer, //handles filter action
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
