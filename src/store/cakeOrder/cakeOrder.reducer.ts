import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CakeOrderProps } from "./cakeOrder.types";

const INITIAL_CHOICES: CakeOrderProps = {
  biszkopt: null,
  date: null,
  dodatek: null,
  krem: null,
  motyw: null,
  srednica: null,
  tynk: "#e0d",
  warstwyKremu: null,
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
    resetCakeOrder(state) {
      state.srednica = INITIAL_CHOICES.srednica;
      state.biszkopt = INITIAL_CHOICES.biszkopt;
      state.date = INITIAL_CHOICES.date;
      state.dodatek = INITIAL_CHOICES.dodatek;
      state.krem = INITIAL_CHOICES.krem;
      state.motyw = INITIAL_CHOICES.motyw;
      state.tynk = INITIAL_CHOICES.tynk;
      state.warstwyKremu = INITIAL_CHOICES.warstwyKremu;
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
  resetCakeOrder,
} = CakeOrderSlice.actions;
export default CakeOrderSlice.reducer;
