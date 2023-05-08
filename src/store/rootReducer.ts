import { combineReducers } from "@reduxjs/toolkit";
import cakeOrderReducer from "./cakeOrder/cakeOrderStore.reducer";
import { userStoreReducer } from "./user/userStore.reducer";
export const rootReducer = combineReducers({
  cakeOrder: cakeOrderReducer,
  user: userStoreReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
