import { configureStore } from "@reduxjs/toolkit";
import APODReducer from "./redux/reducers/APODReducer";

/**
 *
 */
export const store = configureStore({
  reducer: {
    APOD: APODReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch