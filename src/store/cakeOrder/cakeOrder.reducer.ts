import type { PayloadAction } from "@reduxjs/toolkit";
import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
type ChoicesState = {
  srednica: string;
  biszkopt: string;
  warstwyKremu: string;
  krem: string;
  dodatek: string;
  tynk: string;
  motyw: string;
  data: string;
};

const INITIAL_CHOICES: ChoicesState = {
  srednica: "",
  biszkopt: "",
  warstwyKremu: "",
  krem: "",
  dodatek: "",
  tynk: "",
  motyw: "",
  data: "",
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
  },
});

export const { updateSrednica, updateBiszkopt } = CakeOrderSlice.actions;
export default CakeOrderSlice.reducer;
export const selectSrednice = (state: RootState) => state.cakeOrder.srednica;
export const selectBiszkopt = (state: RootState) => state.cakeOrder.biszkopt;
