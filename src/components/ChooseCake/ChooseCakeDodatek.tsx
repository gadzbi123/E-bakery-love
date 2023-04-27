import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDodatek } from "../../store/cakeOrder/cakeOrder.reducer";
import ChooseCakeInput from "./ChooseCakeInput";
import { selectDodatek } from "../../store/cakeOrder/cakeOrder.selector";
const ChooseCakeDodatek = () => {
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateDodatek(e.target.value));
  };
  const dodatekValue = useSelector(selectDodatek);
  const dodatekChecked = (id: string) => {
    return id === dodatekValue;
  };
  return (
    <div className="mt-16">
      <h3 className="text-center text-3xl">Dodatek w Torcie</h3>
      <div className="flex gap-6 justify-center items-center justify-items-center mt-8">
        <ChooseCakeInput
          isRequired
          isChecked={dodatekChecked("brakDodatku")}
          id="brakDodatku"
          name="Dodatek"
          label="Brak"
          peerRoot="peer/brakDodatku"
          peerLabel="peer-checked/brakDodatku:text-yellow-light-30"
          peerBackground="peer-checked/brakDodatku:bg-yellow-light-20"
          inputBackground="checked:bg-yellow-light-20"
          peerBorder="peer-checked/brakDodatku:border-[1px]"
          onChange={handleChange}
        />
        <ChooseCakeInput
          isChecked={dodatekChecked("chrupiacy")}
          id="chrupiacy"
          name="Dodatek"
          label="Chrupiący"
          peerRoot="peer/chrupiacy"
          peerLabel="peer-checked/chrupiacy:text-brown-dark-30"
          peerBackground="peer-checked/chrupiacy:bg-brown-dark-30"
          inputBackground="checked:bg-brown-dark-30"
          peerBorder="peer-checked/chrupiacy:border-[1px]"
          onChange={handleChange}
        />
        <ChooseCakeInput
          isChecked={dodatekChecked("zelkowy")}
          id="zelkowy"
          name="Dodatek"
          label="Żelkowy"
          peerRoot="peer/zelkowy"
          peerLabel="peer-checked/zelkowy:text-purple-700"
          peerBackground="peer-checked/zelkowy:bg-purple-700"
          inputBackground="checked:bg-purple-700"
          peerBorder="peer-checked/zelkowy:border-[1px]"
          onChange={handleChange}
        />
        <ChooseCakeInput
          isChecked={dodatekChecked("owoce")}
          id="owoce"
          name="Dodatek"
          label="Owoce"
          peerRoot="peer/owoce"
          peerLabel="peer-checked/owoce:text-rose-600"
          peerBackground="peer-checked/owoce:bg-rose-600"
          inputBackground="checked:bg-rose-600"
          peerBorder="peer-checked/owoce:border-[1px]"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default ChooseCakeDodatek;
