import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


