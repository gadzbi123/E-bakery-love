import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSrednica } from "../../store/cakeOrder/cakeOrder.reducer";
import { selectSrednica } from "../../store/cakeOrder/cakeOrder.selector";
import ChooseCakeInput from "./ChooseCakeInput";
const ChooseCakeSrednica = () => {
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSrednica(e.target.value));
  };

  const srednicaValue = useSelector(selectSrednica);
  const srednicaChecked = (id: string) => {
    return id === srednicaValue;
  };

  return (
    <div className="mt-16">
      <h3 className="text-center text-3xl">Średnica w cm</h3>
      <div className="flex gap-6 justify-center items-center justify-items-center mt-8">
        <ChooseCakeInput
          isChecked={srednicaChecked("18")}
          id="18"
          name="srednica"
          label="18 cm"
          peerRoot="peer/18"
          peerLabel="peer-checked/18:text-brown-dark-10"
          peerBackground="peer-checked/18:bg-brown-dark-10"
          inputBackground="checked:bg-brown-dark-10"
          peerBorder="peer-checked/18:border-[1px]"
          onChange={handleChange}
          isRequired
        />
        <ChooseCakeInput
          isChecked={srednicaChecked("22")}
          id="22"
          name="srednica"
          label="22 cm"
          peerRoot="peer/22"
          peerLabel="peer-checked/22:text-brown-dark-30"
          peerBackground="peer-checked/22:bg-brown-dark-30"
          inputBackground="checked:bg-brown-dark-30"
          peerBorder="peer-checked/22:border-[1px]"
          onChange={handleChange}
        />
        <ChooseCakeInput
          isChecked={srednicaChecked("24")}
          id="24"
          name="srednica"
          label="24 cm"
          peerRoot="peer/24"
          peerLabel="peer-checked/24:text-brown-dark-20"
          peerBackground="peer-checked/24:bg-brown-dark-20"
          inputBackground="checked:bg-brown-dark-20"
          peerBorder="peer-checked/24:border-[1px]"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default ChooseCakeSrednica;
