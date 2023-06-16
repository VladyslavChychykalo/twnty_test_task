import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderDataI } from "../../interfaces/interfaces";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder(state, action: PayloadAction<OrderDataI>): any {
      return [...state, action.payload];
    },
    addOrderQuantity(_, action: PayloadAction<OrderDataI[]>): any {
      return [...action.payload];
    },
  },
});

export const { addOrder, addOrderQuantity } = ordersSlice.actions;
