import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// The global store is created here
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
