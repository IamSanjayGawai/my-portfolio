import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/slices";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
