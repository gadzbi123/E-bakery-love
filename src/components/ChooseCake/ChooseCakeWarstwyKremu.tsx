import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateWarstwyKremu } from "../../store/cakeOrder/cakeOrder.reducer";
import { selectWarstwyKremu } from "../../store/cakeOrder/cakeOrder.selector";
import ChooseCakeInput from "./ChooseCakeInput";
const ChooseCakeWarstwyKremu = () => {
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateWarstwyKremu(e.target.value));
  };

  const warstwyKremuValue = useSelector(selectWarstwyKremu);
  const warstwyKremuChecked = (id: string) => {
    return id === warstwyKremuValue;
  };

  return (
    <div className=" mt-16">
      <h3 className="text-center text-3xl">Warstwy Kremu</h3>
      <div className="flex gap-10 justify-center items-center justify-items-center mt-8 bg">
        <ChooseCakeInput
          isChecked={warstwyKremuChecked("2")}
          isRequired
          id="2"
          name="WarstwyKremu"
          label="2 warstwy"
          peerRoot="peer/2warstwy"
          peerLabel="peer-checked/2warstwy:text-amber-900"
          peerBackground="peer-checked/2warstwy:bg-amber-900"
          inputBackground="checked:bg-amber-900"
          peerBorder="peer-checked/2warstwy:border-[1px]"
          onChange={handleChange}
        />
        <ChooseCakeInput
          isChecked={warstwyKremuChecked("3")}
          id="3"
          name="WarstwyKremu"
          label="3 warstwy"
          peerRoot="peer/3warstwy"
          peerLabel="peer-checked/3warstwy:text-brown-dark-10"
          peerBackground="peer-checked/3warstwy:bg-brown-dark-10"
          inputBackground="checked:bg-brown-dark-10"
          peerBorder="peer-checked/3warstwy:border-[1px]"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default ChooseCakeWarstwyKremu;
