import { RootState } from "../rootReducer";

export const selectIsValidCakeOrder = (state: RootState) => {
  if (
    state.cakeOrder.srednica &&
    state.cakeOrder.biszkopt &&
    state.cakeOrder.date &&
    state.cakeOrder.dodatek &&
    state.cakeOrder.krem &&
    state.cakeOrder.motyw &&
    state.cakeOrder.tynk &&
    state.cakeOrder.warstwyKremu
  )
    return true;
  else return false;
};

export const selectCakeOrder = (state: RootState) => state.cakeOrder;
export const selectSrednica = (state: RootState) => state.cakeOrder.srednica;
export const selectBiszkopt = (state: RootState) => state.cakeOrder.biszkopt;
export const selectDate = (state: RootState) => state.cakeOrder.date;
export const selectDodatek = (state: RootState) => state.cakeOrder.dodatek;
export const selectKrem = (state: RootState) => state.cakeOrder.krem;
export const selectMotyw = (state: RootState) => state.cakeOrder.motyw;
export const selectTynk = (state: RootState) => state.cakeOrder.tynk;
export const selectWarstwyKremu = (state: RootState) =>
  state.cakeOrder.warstwyKremu;
