import {
  Action,
  AnyAction,
  PayloadAction,
  createAction,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

type ChoicesState = {
  biszkopt: string;
  date: string;
  dodatek: string;
  krem: string;
  motyw: string;
  srednica: string;
  tynk: string;
  warstwyKremu: string;
};

const INITIAL_CHOICES: ChoicesState = {
  biszkopt: "",
  date: "",
  dodatek: "",
  krem: "",
  motyw: "",
  srednica: "",
  tynk: "",
  warstwyKremu: "",
};

export const CakeOrderSlice = createSlice({
  name: "cakeOrder",
  initialState: INITIAL_CHOICES,
  reducers: {
    updateSrednica(state, action: PayloadAction<string>) {
      state.srednica = action.payload;
    },
    updateBiszkopt(state, action: PayloadAction<string>) {
      state.biszkopt = action.payload;
    },
    updateDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    updateDodatek(state, action: PayloadAction<string>) {
      state.dodatek = action.payload;
    },
    updateKrem(state, action: PayloadAction<string>) {
      state.krem = action.payload;
    },
    updateMotyw(state, action: PayloadAction<string>) {
      state.motyw = action.payload;
    },
    updateTynk(state, action: PayloadAction<string>) {
      state.tynk = action.payload;
    },
    updateWarstwyKremu(state, action: PayloadAction<string>) {
      state.warstwyKremu = action.payload;
    },
  },
});

export const {
  updateSrednica,
  updateBiszkopt,
  updateDate,
  updateDodatek,
  updateKrem,
  updateMotyw,
  updateTynk,
  updateWarstwyKremu,
} = CakeOrderSlice.actions;
export default CakeOrderSlice.reducer;
export const selectCakeOrder = (state: RootState) => state.cakeOrder;
export const selectSrednice = (state: RootState) => state.cakeOrder.srednica;
export const selectBiszkopt = (state: RootState) => state.cakeOrder.biszkopt;
export const selectDate = (state: RootState) => state.cakeOrder.date;
export const selectDodatek = (state: RootState) => state.cakeOrder.dodatek;
export const selectKrem = (state: RootState) => state.cakeOrder.krem;
export const selectMotyw = (state: RootState) => state.cakeOrder.motyw;
export const selectTynk = (state: RootState) => state.cakeOrder.tynk;
export const selectWarstwyKremu = (state: RootState) =>
  state.cakeOrder.warstwyKremu;
