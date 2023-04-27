import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

const INITIAL_CHOICES: ChoicesState = {
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
      state.srednica = null;
      state.biszkopt = null;
      state.date = null;
      state.dodatek = null;
      state.krem = null;
      state.motyw = null;
      state.tynk = "#e0d";
      state.warstwyKremu = null;
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
