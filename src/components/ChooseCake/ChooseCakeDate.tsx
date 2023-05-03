import { ChangeEvent, createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DAYS_IN_FORWARD } from "../../static/constants";
import { updateDate } from "../../store/cakeOrder/cakeOrder.reducer";
import { selectDate } from "../../store/cakeOrder/cakeOrder.selector";

const ChooseCakeDate = () => {
  const calculateMinDate = () => {
    let today = new Date().valueOf();
    let minDate = new Date(today + DAYS_IN_FORWARD * 86_400_000);

    let minYear = minDate.getFullYear(),
      minMonth = minDate.getMonth() + 1,
      minDay = minDate.getDate();
    let minDateFormatted = `${minYear}-${
      minMonth < 10 ? `0${minMonth}` : minMonth
    }-${minDay < 10 ? `0${minDay}` : minDay}`;

    return minDateFormatted;
  };

  const [localDate, setLocalDate] = useState("");
  const dateInput = createRef<HTMLInputElement>();

  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalDate(e.target.value);
    dispatch(updateDate(e.target.value));
  };

  const savedDate = useSelector(selectDate);
  useEffect(() => {
    if (savedDate !== localDate && dateInput.current)
      dateInput.current.value = "";
  }, [savedDate]);

  return (
    <div className="mt-16">
      <h3 className="text-center text-3xl">Data Uroczystości</h3>
      <div className="flex gap-6 justify-center items-center justify-items-center mt-8">
        <input
          ref={dateInput}
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
