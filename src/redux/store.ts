import { configureStore } from "@reduxjs/toolkit";
import { ordersSlice } from "./slice/orders";

export const store: any = configureStore({
  reducer: {
    orders: ordersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
