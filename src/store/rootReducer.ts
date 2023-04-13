import { combineReducers } from "@reduxjs/toolkit";
import cakeOrderReducer from "./cakeOrder/cakeOrder.reducer";
export const rootReducer = combineReducers({ cakeOrder: cakeOrderReducer });
export type RootState = ReturnType<typeof rootReducer>;
