import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(logger);
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
