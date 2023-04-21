import { ChangeEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { DAYS_IN_FORWARD } from "../../static/constants";
import { updateDate } from "../../store/cakeOrder/cakeOrder.reducer";
import ChooseCakeInput from "./ChooseCakeInput";
const ChooseCakeDate = () => {
  const calculateMinDate: () => string = useCallback(() => {
    let today = new Date().valueOf();
    let minDate = new Date(today + DAYS_IN_FORWARD * 86_400_000);
    let minDateFormatted = `${minDate.getFullYear()}-${
      minDate.getMonth() + 1 < 10
        ? `0${minDate.getMonth() + 1}`
        : minDate.getMonth() + 1
    }-${minDate.getDate()}`;
    return minDateFormatted;
  }, []);

  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateDate(e.target.value));
  };

  return (
    <div className="mt-16">
      <h3 className="text-center text-3xl">Data Uroczystości</h3>
      <div className="flex gap-6 justify-center items-center justify-items-center mt-8">
        <input
          type="date"
          name="date"
          min={calculateMinDate()}
          className=" bg-yellow-light-20 text-xl py-2 px-4 rounded-md"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default ChooseCakeDate;
